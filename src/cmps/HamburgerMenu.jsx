import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { LoginModal } from '../pages/Login'
import { userService } from '../services/user/index'
import { logout } from '../store/actions/user.actions'

export function HamburgerMenu({ onClose, onOpenLogin }) {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = userService.getLoggedInUser()
    setLoggedInUser(user)
  }, [])

  async function onLogout() {
    navigate('/')
    await logout()
    setLoggedInUser(null)
    window.dispatchEvent(new Event('userChanged'))
    onClose()
  }

  function handleLoginClick() {
    onClose()
    onOpenLogin()
  }

  return (
    <div className="hamburger-menu">
      <ul>
        {!loggedInUser && (
          <li className="login-link" onClick={handleLoginClick}>
            Login
          </li>
        )}
        {loggedInUser && (
          <>
            <li>
              <Link to="/wishlists" onClick={onClose}>
                Wishlists
              </Link>
            </li>
            <li>
              <Link to="/trips" onClick={onClose}>
                Trips
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={onClose}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/reservation" onClick={onClose}>
                Reservations
              </Link>
            </li>
            <li className="logout-link" onClick={onLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
