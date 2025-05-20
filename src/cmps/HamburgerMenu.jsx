import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { LoginModal } from '../pages/Login'
import { userService } from '../services/user/index'
import { logout } from '../store/actions/user.actions'

export function HamburgerMenu({ onClose, onOpenLogin }) {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const user = userService.getLoggedInUser()
    setLoggedInUser(user)
  }, [])

  async function onLogout() {
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
                Reservation
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
