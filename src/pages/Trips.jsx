import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCmdUpdateOrder, loadOrders } from '../store/actions/order.actions'
import { SOCKET_EVENT_ORDER_UPDATED, socketService } from '../services/socket.service'

export function Trips() {
  const orders = useSelector(storeState => storeState.orderModule.orders)
  const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
  const filterBy = { guestId: loggedInUser._id, sortField: '_id', sortDir: -1 }
  const dispatch = useDispatch()

  console.log(orders)

  useEffect(() => {
    loadOrders(filterBy)

    socketService.on(SOCKET_EVENT_ORDER_UPDATED, order => {
      dispatch(getCmdUpdateOrder(order))
    })

    return () => {
      socketService.off(SOCKET_EVENT_ORDER_UPDATED)
    }
  }, [loggedInUser])


  function formatDate(dateStr) {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US')
  }

  if (!orders.length) return <p>No trips to show.</p>

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
          {orders.map((order, idx) => (
            <tr key={order.id || idx}>
              <td className="host-info" data-label="Host">
                <img src={order.host.imgUrl} />
                <span>{order.host.fullname}</span>
              </td>
              <td data-label="Check-in">{formatDate(order.startDate)}</td>
              <td data-label="Check-out">{formatDate(order.endDate)}</td>
              <td data-label="Booked">{formatDate(order.bookedAt)}</td>
              <td data-label="Listing">{order.stay.name}</td>
              <td data-label="Total Payout">${order.totalPrice.toFixed(2)}</td>
              <td
                data-label="Status"
                className={`status ${order.status.toLowerCase()}`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
