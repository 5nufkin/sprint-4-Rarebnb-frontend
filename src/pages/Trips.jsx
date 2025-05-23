import { useEffect, useState } from 'react'
import { orderService } from '../services/order/index'
import { userService } from '../services/user'
import { useSelector } from 'react-redux'

export function Trips() {
  const [trips, setTrips] = useState([])
  const [sortBy, setSortBy] = useState({ field: null, asc: true })
  const loggedInUser = useSelector(
    (storeState) => storeState.userModule.loggedInUser
  )

  useEffect(() => {
    loadTrips()
  }, [loggedInUser])

  // const demoOrders = [
  //   {
  //     _id: 't001',
  //     stay: {
  //       name: 'Paris Loft',
  //       imgUrls: ['https://i.pravatar.cc/150?img=51'],
  //     },
  //     host: {
  //       fullname: 'Marie Dupont',
  //       imgUrl: 'https://i.pravatar.cc/150?img=11',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-07-01',
  //     endDate: '2025-07-05',
  //     createdAt: '2025-06-01T12:00:00Z',
  //     totalPrice: 920,
  //     status: 'approved',
  //   },
  //   {
  //     _id: 't002',
  //     stay: {
  //       name: 'Lake Cabin',
  //       imgUrls: ['https://i.pravatar.cc/150?img=52'],
  //     },
  //     host: {
  //       fullname: 'John Smith',
  //       imgUrl: 'https://i.pravatar.cc/150?img=12',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-08-12',
  //     endDate: '2025-08-16',
  //     createdAt: '2025-07-20T15:10:00Z',
  //     totalPrice: 780,
  //     status: 'pending',
  //   },
  //   {
  //     _id: 't003',
  //     stay: {
  //       name: 'Rome Center Stay',
  //       imgUrls: ['https://i.pravatar.cc/150?img=53'],
  //     },
  //     host: {
  //       fullname: 'Giulia Bianchi',
  //       imgUrl: 'https://i.pravatar.cc/150?img=13',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-09-10',
  //     endDate: '2025-09-15',
  //     createdAt: '2025-08-05T09:00:00Z',
  //     totalPrice: 1050,
  //     status: 'approved',
  //   },
  //   {
  //     _id: 't004',
  //     stay: {
  //       name: 'Tokyo Capsule',
  //       imgUrls: ['https://i.pravatar.cc/150?img=54'],
  //     },
  //     host: {
  //       fullname: 'Yuki Tanaka',
  //       imgUrl: 'https://i.pravatar.cc/150?img=14',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-06-20',
  //     endDate: '2025-06-25',
  //     createdAt: '2025-05-28T18:00:00Z',
  //     totalPrice: 650,
  //     status: 'rejected',
  //   },
  //   {
  //     _id: 't005',
  //     stay: {
  //       name: 'Desert Dome',
  //       imgUrls: ['https://i.pravatar.cc/150?img=55'],
  //     },
  //     host: {
  //       fullname: 'Nadia Cohen',
  //       imgUrl: 'https://i.pravatar.cc/150?img=15',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-07-18',
  //     endDate: '2025-07-22',
  //     createdAt: '2025-06-30T10:15:00Z',
  //     totalPrice: 870,
  //     status: 'approved',
  //   },
  //   {
  //     _id: 't006',
  //     stay: {
  //       name: 'NYC Studio',
  //       imgUrls: ['https://i.pravatar.cc/150?img=56'],
  //     },
  //     host: {
  //       fullname: 'Mike Lee',
  //       imgUrl: 'https://i.pravatar.cc/150?img=16',
  //     },
  //     guest: { fullname: 'Eran Zehavi' },
  //     startDate: '2025-10-05',
  //     endDate: '2025-10-10',
  //     createdAt: '2025-09-01T08:30:00Z',
  //     totalPrice: 980,
  //     status: 'pending',
  //   },
  // ]

  // useEffect(() => {
  //   const mappedTrips = demoOrders.map((order) => ({
  //     id: order._id,
  //     stayName: order.stay.name,
  //     stayImgUrl: order.stay.imgUrls?.[0] || getFallbackImg(),
  //     hostFullname: order.host.fullname,
  //     guestFullname: order.guest.fullname,
  //     hostImgUrl: order.host.imgUrl || getFallbackImg(),
  //     checkIn: order.startDate,
  //     checkOut: order.endDate,
  //     bookedAt: order.createdAt || '',
  //     price: order.totalPrice,
  //     status: order.status,
  //   }))

  //   setTrips(mappedTrips)
  // }, [])

  async function loadTrips() {
    try {
      const user = userService.getLoggedInUser()
      if (!user) return
      const orders = await orderService.query({ byUserId: user._id })

      const mappedTrips = orders.map((order) => ({
        id: order._id,
        stayName: order.stay.name,
        stayImgUrl: order.stay.imgUrls?.[0] || getFallbackImg(),
        hostFullname: order.host.fullname,
        hostImgUrl: order.host.imgUrl || getFallbackImg(), 
        guestFullname: order.guest.fullname,
        checkIn: order.startDate,
        checkOut: order.endDate,
        bookedAt: order.createdAt || '',
        price: order.totalPrice,
        status: order.status,
      }))

      setTrips(mappedTrips)
    } catch (err) {
      console.error('Failed to load trips:', err)
    }
  }

  function getFallbackImg() {
    return 'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  }

  function formatDate(dateStr) {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US')
  }

  function sortTrips(data) {
    if (!sortBy.field) return data

    return [...data].sort((a, b) => {
      const valA = new Date(a[sortBy.field]).getTime()
      const valB = new Date(b[sortBy.field]).getTime()
      return sortBy.asc ? valA - valB : valB - valA
    })
  }

  if (!trips.length) return <p>No trips to show.</p>

  return (
    <section className="trips-main">
      <h2>My Trips</h2>
      <table className="trips-table">
        <thead>
          <tr>
            <th>Host</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Booked</th>
            <th>Listing</th>
            <th>Total Payout</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortTrips(trips).map((trip, idx) => (
            <tr key={trip.id || idx}>
              <td className="host-info" data-label="Host">
                <img src={trip.hostImgUrl} alt={trip.hostFullname} />
                <span>{trip.hostFullname}</span>
              </td>
              <td data-label="Check-in">{formatDate(trip.checkIn)}</td>
              <td data-label="Check-out">{formatDate(trip.checkOut)}</td>
              <td data-label="Booked">{formatDate(trip.bookedAt)}</td>
              <td data-label="Listing">{trip.stayName}</td>
              <td data-label="Total Payout">${trip.price?.toFixed(0)}</td>
              <td
                data-label="Status"
                className={`status ${trip.status.toLowerCase()}`}
              >
                {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
