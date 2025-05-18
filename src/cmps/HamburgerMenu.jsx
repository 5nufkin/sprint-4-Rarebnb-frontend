// // import { useState } from "react"
// // import { Link } from "react-router-dom"

// // export function HamburgerMenu({ onClose }) {
// //   const [loggedIn, setUserLogin] = useState(false)

// //   return (
// //     <div className="hamburger-menu">
// //       <ul>
// //         {!loggedIn ? (
// //           <li>
// //             <Link to="/login" onClick={onClose}>Login</Link>
// //           </li>
// //         ) : (
// //           <>
// //             <li>
// //               <Link to="/wishlists" onClick={onClose}>Wishlists</Link>
// //             </li>
// //             <li>
// //               <Link to="/trips" onClick={onClose}>Trips</Link>
// //             </li>
// //             <li>
// //               <Link to="/dashboard" onClick={onClose}>Dashboard</Link>
// //             </li>
// //             <li>
// //               <Link to="/listing" onClick={onClose}>Listings</Link>
// //             </li>
// //           </>
// //         )}
// //       </ul>
// //     </div>
// //   )
// // }

// import { useState } from "react"
// import { LoginSignup }  from "../pages/LoginSignup"
// import { Link } from "react-router-dom"
// import { LoginModal } from "../pages/Login"

// export function HamburgerMenu({ onClose }) {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [loggedIn, setLoggedIn] = useState(false) 

//   function openLogin() {
//     setIsModalOpen(true)
//   }

//   function closeLogin() {
//     setIsModalOpen(false)
//   }

//   return (
//     <div className="hamburger-menu">
//       <ul>
//         {!loggedIn && (
//           <li>
//             <button className="login-link" onClick={openLogin}>Login</button>
//           </li>
//         )}
//         {loggedIn && (
//           <>
//             <li><Link to="/wishlists" onClick={onClose}>Wishlists</Link></li>
//             <li><Link to="/trips" onClick={onClose}>Trips</Link></li>
//             <li><Link to="/dashboard" onClick={onClose}>Dashboard</Link></li>
//             <li><Link to="/listing" onClick={onClose}>Listings</Link></li>
//           </>
//         )}
//       </ul>

//       {isModalOpen && <LoginModal onClose={closeLogin} />}
//     </div>
//   )
// }

import { useState } from "react"
import { Link } from "react-router-dom"
import { LoginModal } from "../pages/Login"

export function HamburgerMenu({ onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false) 

  function openLogin() {
    setIsModalOpen(true)
  }

  function closeLogin() {
    setIsModalOpen(false)
  }

  return (
    <div className="hamburger-menu">
      <ul>
        {!loggedIn && (
          <li>
            <li className="login-link" onClick={openLogin}>Login</li>
          </li>
        )}
        {loggedIn && (
          <>
            <li><Link to="/wishlists" onClick={onClose}>Wishlists</Link></li>
            <li><Link to="/trips" onClick={onClose}>Trips</Link></li>
            <li><Link to="/dashboard" onClick={onClose}>Dashboard</Link></li>
            <li><Link to="/listing" onClick={onClose}>Listings</Link></li>
          </>
        )}
      </ul>

      {isModalOpen && <LoginModal onClose={closeLogin} />}
    </div>
  )
}
