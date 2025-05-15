// HamburgerMenu.jsx
import { NavLink } from "react-router-dom"

export function HamburgerMenu({ onClose }) {
  
  return (
    <div className="hamburger-menu">
      <ul>
        <li>
          <NavLink to="/wishlists">Wishlists</NavLink>
        </li>
        <li>
          <NavLink to="/trips">Trips</NavLink>
        </li>
        <li>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/account-settings">Account settings</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help Center</NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={onClose}>
            Log out
          </button>
        </li>
      </ul>
    </div>
  )
}
