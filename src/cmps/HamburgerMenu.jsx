import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginModal } from "../pages/Login"

export function HamburgerMenu({ onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isloggedIn, setLoggedIn] = useState(false)

  function openLogin() {
    setIsModalOpen(true)
  }

  function closeLogin() {
    setIsModalOpen(false)
  }

  return (
    <div className="hamburger-menu">
      <ul>
        {!isloggedIn && (
          <li className="login-link" onClick={openLogin}>
            Login
          </li>
        )}
        {isloggedIn && (
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
              <Link to="/listing" onClick={onClose}>
                Listings
              </Link>
            </li>
          </>
        )}
      </ul>
      {isModalOpen && <LoginModal onClose={closeLogin} />}

    </div>
  )
}
