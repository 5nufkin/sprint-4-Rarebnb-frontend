// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { LoginModal } from "../pages/Login"
// import { userService } from "../services/user/user.service.local"
// import { logout } from "../store/actions/user.actions"

// export function HamburgerMenu({ onClose }) {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [loggedInUser, setLoggedInUser] = useState(
//     userService.getLoggedInUser()
//   )

//   function handleLoginSuccess() {
//     const user = userService.getLoggedInUser()
//     setLoggedInUser(user)
//   }

//   function openLogin() {
//     setIsModalOpen(true)
//   }

//   function closeLogin() {
//     setIsModalOpen(false)
//   }

//   async function onLogout() {
//     await logout()
//     setLoggedInUser(false)
//     onClose()
//   }

//   return (
//     <div className="hamburger-menu">
//       <ul>
//         {!loggedInUser && (
//           <li className="login-link" onClick={openLogin}>
//             Login
//           </li>
//         )}
//         {loggedInUser && (
//           <>
//             <li>
//               <Link to="/wishlists" onClick={onClose}>
//                 Wishlists
//               </Link>
//             </li>
//             <li>
//               <Link to="/trips" onClick={onClose}>
//                 Trips
//               </Link>
//             </li>
//             <li>
//               <Link to="/dashboard" onClick={onClose}>
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/listing" onClick={onClose}>
//                 Listings
//               </Link>
//             </li>
//             <li className="logout-link" onClick={onLogout}>
//               Logout
//             </li>
//           </>
//         )}
//       </ul>
//       {isModalOpen && (
//         <LoginModal onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
//       )}{" "}
//     </div>
//   )
// }

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginModal } from "../pages/Login"
import { userService } from "../services/user/index"
import { logout } from "../store/actions/user.actions"

export function HamburgerMenu({ onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const user = userService.getLoggedInUser()
    setLoggedInUser(user)
  }, [])

  function handleLoginSuccess() {
    const user = userService.getLoggedInUser()
    setLoggedInUser(user)
    window.dispatchEvent(new Event("userChanged"))
  }

  function openLogin() {
    setIsModalOpen(true)
  }

  function closeLogin() {
    setIsModalOpen(false)
  }

  async function onLogout() {
    await logout()
    setLoggedInUser(null)
    window.dispatchEvent(new Event("userChanged"))
    onClose()
  }

  return (
    <div className="hamburger-menu">
      <ul>
        {!loggedInUser && (
          <li className="login-link" onClick={openLogin}>
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
              <Link to="/listing" onClick={onClose}>
                Listings
              </Link>
            </li>
            <li className="logout-link" onClick={onLogout}>
              Logout
            </li>
          </>
        )}
      </ul>

      {isModalOpen && (
        <LoginModal onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  )
}
