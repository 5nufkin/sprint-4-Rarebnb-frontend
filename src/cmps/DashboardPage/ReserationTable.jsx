import { useState } from "react"

export function ReservationTable({ sales }) {
  const [sortBy, setSortBy] = useState({ field: null, asc: true })

  function toggleSort(field) {
    setSortBy((prev) =>
      prev.field === field ? { field, asc: !prev.asc } : { field, asc: true }
    )
  }
  function formatDDMMYYYY(dateStr) {
    if (!dateStr) return null
    const [day, month, year] = dateStr.split("/")
    return new Date(`${year}-${month}-${day}`)
  }

  function renderArrow(field) {
    if (sortBy.field !== field) return "⇅"
    return sortBy.asc ? "↑" : "↓"
  }

  function sortSales(sales) {
    if (!sortBy.field) return sales

    return [...sales].sort((a, b) => {
      let valA, valB

      // Date fields inside bookingStatus
      if (["checkIn", "checkOut", "bookedAt"].includes(sortBy.field)) {
        const dateA = formatDDMMYYYY(a.bookingStatus?.[sortBy.field])
        const dateB = formatDDMMYYYY(b.bookingStatus?.[sortBy.field])
        valA = dateA?.getTime?.() || 0
        valB = dateB?.getTime?.() || 0
      }

      // Direct numeric field
      else if (sortBy.field === "price") {
        valA = a.price
        valB = b.price
      }

      return sortBy.asc ? valA - valB : valB - valA
    })
  }

  return (
    <section className="reservation-table">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Guest</th>
            <th onClick={() => toggleSort("checkIn")}>
              Check-in {renderArrow("checkIn")}
            </th>
            <th onClick={() => toggleSort("checkOut")}>
              Checkout {renderArrow("checkOut")}
            </th>
            <th onClick={() => toggleSort("bookedAt")}>
              Booked {renderArrow("bookedAt")}
            </th>
            <th>Listing</th>
            <th onClick={() => toggleSort("price")}>
              Total Payout {renderArrow("price")}
            </th>

            <th>Status</th>
            <th>To do</th>
          </tr>
        </thead>
        <tbody>
          {sortSales(sales).map((sale, idx) => (
            <tr key={sale.id || idx}>
              <td className="guest-cell">
                <img
                  src={
                    sale.guestImgUrl ||
                    "https://randomuser.me/api/portraits/lego/1.jpg"
                  }
                  alt="Guest"
                />
                <span>{sale.customer}</span>
              </td>
              <td>{sale.bookingStatus?.checkIn}</td>
              <td>{sale.bookingStatus?.checkOut}</td>
              <td>{sale.bookingStatus?.bookedAt}</td>
              <td>{sale.product}</td>
              <td>${sale.price?.toFixed(2)}</td>
              <td
                className={`status ${sale.bookingStatus?.status?.toLowerCase()}`}
              >
                {sale.bookingStatus?.status}
              </td>
              <td>
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
