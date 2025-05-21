import { useState, useEffect } from 'react'

export function ReservationTable({ sales = [], setStats }) {
  const [sortBy, setSortBy] = useState({ field: null, asc: true })
  const [statuses, setStatuses] = useState([])

  useEffect(() => {
    setStatuses(sales.map((sale) => sale.bookingStatus?.status || 'Unknown'))
  }, [sales])

  function toggleSort(field) {
    setSortBy((prev) =>
      prev.field === field ? { field, asc: !prev.asc } : { field, asc: true }
    )
  }

  function formatDDMMYYYY(dateStr) {
    if (!dateStr) return null
    const [day, month, year] = dateStr.split('/')
    if (!day || !month || !year) return null
    return new Date(`${year}-${month}-${day}`)
  }

  function renderArrow(field) {
    if (sortBy.field !== field) return '⇅'
    return sortBy.asc ? '↑' : '↓'
  }

  function sortSales(data) {
    if (!sortBy.field) return data

    const validFields = ['checkIn', 'checkOut', 'bookedAt', 'price']
    if (!validFields.includes(sortBy.field)) return data

    return [...data].sort((a, b) => {
      let valA, valB
      if (['checkIn', 'checkOut', 'bookedAt'].includes(sortBy.field)) {
        const dateA = formatDDMMYYYY(a.bookingStatus?.[sortBy.field] || '')
        const dateB = formatDDMMYYYY(b.bookingStatus?.[sortBy.field] || '')
        valA = dateA?.getTime?.() || 0
        valB = dateB?.getTime?.() || 0
      } else if (sortBy.field === 'price') {
        valA = a.price || 0
        valB = b.price || 0
      }
      return sortBy.asc ? valA - valB : valB - valA
    })
  }

  function updateStatus(idx, newStatus) {
    setStatuses((prev) => {
      const updated = [...prev]
      const prevStatus = prev[idx]
      const originalStatus = sales[idx]?.bookingStatus?.status

      if (setStats) {
        if (
          newStatus === 'Rejected' &&
          prevStatus !== 'Rejected' &&
          originalStatus !== 'Rejected'
        ) {
          setStats((prevStats) => ({
            ...prevStats,
            refunded: prevStats.refunded + 1,
          }))
        } else if (
          newStatus === 'Approved' &&
          prevStatus === 'Rejected' &&
          originalStatus !== 'Rejected'
        ) {
          setStats((prevStats) => ({
            ...prevStats,
            refunded: Math.max(prevStats.refunded - 1, 0),
          }))
        }
      }

      updated[idx] = newStatus
      return updated
    })
  }

  if (!sales.length) return <p>No reservations to show.</p>

  return (
    <section className="reservation-table">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Guest</th>
            <th onClick={() => toggleSort('checkIn')}>
              Check-in {renderArrow('checkIn')}
            </th>
            <th onClick={() => toggleSort('checkOut')}>
              Checkout {renderArrow('checkOut')}
            </th>
            <th onClick={() => toggleSort('bookedAt')}>
              Booked {renderArrow('bookedAt')}
            </th>
            <th>Listing</th>
            <th onClick={() => toggleSort('price')}>
              Total Payout {renderArrow('price')}
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
                    'https://randomuser.me/api/portraits/lego/1.jpg'
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
              <td className={`status ${statuses[idx]?.toLowerCase()}`}>
                {statuses[idx]}
              </td>
              <td className="btn-actions">
                <button
                  onClick={() => updateStatus(idx, 'Approved')}
                  className="approve-btn"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(idx, 'Rejected')}
                  className="reject-btn"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
