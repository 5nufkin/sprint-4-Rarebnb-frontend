import { useEffect, useState } from "react"
import { orderService } from "../services/order/index"
import { userService } from "../services/user"

export function Trips() {
  const [trips, setTrips] = useState([])
  const [sortBy, setSortBy] = useState({ field: null, asc: true })

  useEffect(() => {
    loadTrips()
  }, [])

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
        guestFullname: order.guest.fullname,
        checkIn: order.startDate,
        checkOut: order.endDate,
        bookedAt: order.createdAt || "", 
        price: order.totalPrice,
        status: order.status,
      }))

      setTrips(mappedTrips)
    } catch (err) {
      console.error("Failed to load trips:", err)
    }
  }

  function getFallbackImg() {
    return "https://res.cloudinary.com/demo/image/upload/sample.jpg"
  }

  function toggleSort(field) {
    setSortBy((prev) =>
      prev.field === field ? { field, asc: !prev.asc } : { field, asc: true }
    )
  }

  function renderArrow(field) {
    if (sortBy.field !== field) return "⇅"
    return sortBy.asc ? "↑" : "↓"
  }

  function formatDate(dateStr) {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US")
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
            <th>Destination</th>
            <th>Host</th>
            <th onClick={() => toggleSort("checkIn")}>
              Check-in {renderArrow("checkIn")}
            </th>
            <th onClick={() => toggleSort("checkOut")}>
              Checkout {renderArrow("checkOut")}
            </th>
            <th onClick={() => toggleSort("bookedAt")}>
              Booked {renderArrow("bookedAt")}
            </th>
            <th onClick={() => toggleSort("price")}>
              Total Price {renderArrow("price")}
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortTrips(trips).map((trip, idx) => (
            <tr key={trip.id || idx}>
              <td className="destination-cell">
                <img
                  src={trip.stayImgUrl}
                  alt="Stay"
                  className="stay-thumb"
                />
                <span>{trip.stayName}</span>
              </td>
              <td>{trip.hostFullname}</td>
              <td>{formatDate(trip.checkIn)}</td>
              <td>{formatDate(trip.checkOut)}</td>
              <td>{formatDate(trip.bookedAt)}</td>
              <td>${trip.price?.toFixed(2)}</td>
              <td className={`status ${trip.status?.toLowerCase()}`}>
                {trip.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
