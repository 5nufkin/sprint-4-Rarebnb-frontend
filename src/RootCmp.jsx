// import React from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'

import { StayIndex } from './pages/StayIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { PaymentPage } from './pages/PaymentPage.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Trips } from './pages/Trips.jsx'
import { SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATED, socketService } from './services/socket.service.js'
import { showSuccessMsg } from './services/event-bus.service.js'
import { Reservations } from './pages/Reservations.jsx'
import { LoginMobile } from './pages/LoginMobile.jsx'
import { SignupMobile } from './pages/SignupMobile.jsx'
import { useSelector } from 'react-redux'
// import { LoginSignup } from "./pages/LoginSignup.jsx"
// import { Login } from "./pages/Login.jsx"
// import { Signup } from "./pages/Signup.jsx"

export function RootCmp() {
  // const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
  const location = useLocation()
  const isIndexPage = location.pathname === '/'

  // useEffect(() => {
  //   if (loggedInUser) return

  // }, [loggedInUser])

  useEffect(() => {
    socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
      showSuccessMsg(`New reservation at ${order.stay.name}!`)
    })
    return () => {
      socketService.off(SOCKET_EVENT_ORDER_ADDED)
    }
  }, [])

  useEffect(() => {
    socketService.on(SOCKET_EVENT_ORDER_UPDATED, (order) => {
      showSuccessMsg(`New order status for ${order.stay.name}!`)
    })
    return () => {
      socketService.off(SOCKET_EVENT_ORDER_UPDATED)
    }
  }, [])

  return (
    <>
      <AppHeader />
      <UserMsg />
      <main className={`main-layout ${isIndexPage ? 'home-padding' : 'default-padding'}`}>
        <Routes>
          <Route path="/" element={<StayIndex />} />
          <Route path="stay/:stayId" element={<StayDetails />} />
          <Route path="stay/:stayId/payment" element={<PaymentPage />} />
          <Route path="user/:id" element={<UserDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trips" element={<Trips />} />
          <Route path="reservation" element={<Reservations />} />
          <Route path="review" element={<ReviewIndex />} />
          <Route path="chat" element={<ChatApp />} />
          <Route path="admin" element={<AdminIndex />} />
          <Route path="login" element={<LoginMobile />} />
          <Route path="signup" element={<SignupMobile />} />
        </Routes>
      </main>
      <AppFooter />
    </>
  )
}
