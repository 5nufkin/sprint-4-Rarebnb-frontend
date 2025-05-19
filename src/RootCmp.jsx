// import React from 'react'
import { Routes, Route } from "react-router"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userService } from "./services/user"


import { StayIndex } from "./pages/StayIndex.jsx"
import { ReviewIndex } from "./pages/ReviewIndex.jsx"
import { ChatApp } from "./pages/Chat.jsx"
import { AdminIndex } from "./pages/AdminIndex.jsx"

import { PaymentPage } from "./pages/PaymentPage.jsx"
import { StayDetails } from "./pages/StayDetails.jsx"
import { UserDetails } from "./pages/UserDetails"

import { AppHeader } from "./cmps/AppHeader"
import { AppFooter } from "./cmps/AppFooter"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { Dashboard } from "./pages/Dashboard.jsx"
import { ListingsPage } from "./pages/Listings.jsx"
// import { LoginSignup } from "./pages/LoginSignup.jsx"
// import { Login } from "./pages/Login.jsx"
// import { Signup } from "./pages/Signup.jsx"

export function RootCmp() {
  const dispatch = useDispatch()

  useEffect(() => {
    const user = userService.getLoggedInUser()
    if (user) dispatch({ type: "SET_USER", user })
  }, [])

  return (
    <>
      <AppHeader />
      <UserMsg />
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<StayIndex />} />
          <Route path="stay/:stayId" element={<StayDetails />} />
          <Route path="stay/:stayId/payment" element={<PaymentPage />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listing" element={<ListingsPage />} />
          <Route path="review" element={<ReviewIndex />} />
          <Route path="chat" element={<ChatApp />} />
          <Route path="admin" element={<AdminIndex />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  )
}


// export function RootCmp() {
//   return (
//     <>
//       <AppHeader />
//       <UserMsg />
//       <main className="main-layout">
//         <Routes>
//           <Route path="/" element={<StayIndex />} />
//           <Route path="stay/:stayId" element={<StayDetails />} />
//           <Route path="stay/:stayId/payment" element={<PaymentPage />} />
//           <Route path="user/:id" element={<UserDetails />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="listing" element={<ListingsPage />} />
//           <Route path="review" element={<ReviewIndex />} />
//           <Route path="chat" element={<ChatApp />} />
//           <Route path="admin" element={<AdminIndex />} />
//           {/* <Route path="login" element={<LoginSignup />} />
//           <Route index element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//           </Route> */}
//         </Routes>
//       </main>
//       <AppFooter />
//     </>
//   )
// }