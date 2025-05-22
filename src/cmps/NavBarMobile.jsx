import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import {
  ExploreIcon,
  LogoutIcon,
  ProfileIcon,
  ReservationIcon,
  TripsIcon,
  WishlistIcon,
} from './Icons'
import { userService } from '../services/user'
import { logout } from '../store/actions/user.actions'

export function MobileNavBar() {
  const location = useLocation()
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    setLoggedInUser(userService.getLoggedInUser())
    window.addEventListener('userChanged', () => {
      setLoggedInUser(userService.getLoggedInUser())
    })
  }, [])

  function handleLogout() {
    logout()
    window.dispatchEvent(new Event('userChanged'))
    Navigate('/') 
  }

  return (
    <nav className="mobile-nav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <ExploreIcon />
        <span>Explore</span>
      </Link>

      {!loggedInUser && (
        <Link
          to="/login"
          className={location.pathname === '/login' ? 'active' : ''}
        >
          <ProfileIcon />
          <span>Log in</span>
        </Link>
      )}

      {loggedInUser && (
        <>
          <Link
            to="/wishlists"
            className={location.pathname === '/wishlists' ? 'active' : ''}
          >
            <WishlistIcon />
            <span>Wishlists</span>
          </Link>
          <Link
            to="/trips"
            className={location.pathname === '/trips' ? 'active' : ''}
          >
            <TripsIcon />
            <span>Trips</span>
          </Link>
          <Link
            to="/reservation"
            className={location.pathname === '/reservation' ? 'active' : ''}
          >
            <ReservationIcon />
            <span>Reservation</span>
          </Link>

          <Link to="/" onClick={handleLogout}>
            <LogoutIcon />
            <span>Logout</span>
          </Link>
        </>
      )}
    </nav>
  )
}
