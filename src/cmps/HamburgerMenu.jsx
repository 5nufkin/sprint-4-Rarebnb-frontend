import { Link } from "react-router-dom"

export function HamburgerMenu({ onClose }) {
  return (
    <div className="hamburger-menu">
      <ul>
        <li>
          <Link to="/wishlists" onClick={onClose}>Wishlists</Link>
        </li>
        <li>
          <Link to="/trips" onClick={onClose}>Trips</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={onClose}>Dashboard</Link>
        </li>
        <li>
          <Link to="/listing" onClick={onClose}>Listings</Link>
        </li>
        <li>
          <Link to="/logout" onClick={onClose}>Log out</Link>
        </li>
      </ul>
    </div>
  )
}
