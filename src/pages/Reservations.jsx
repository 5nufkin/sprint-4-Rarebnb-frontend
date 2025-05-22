import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { orderService } from '../services/order'
import { updateOrder } from '../store/actions/order.actions'
import { showErrorMsg } from '../services/event-bus.service'

export function Reservations() {
  const loggedInUser = useSelector(
    (storeState) => storeState.userModule.loggedInUser
  )
  const [orders, setOrders] = useState([])

  console.log(orders)

  useEffect(() => {
    loadOrders()
  }, [loggedInUser])

  async function loadOrders() {
    const filterBy = { hostId: loggedInUser._id }
    try {
      const orders = await orderService.query(filterBy)
      setOrders(orders)
    } catch (err) {
      console.log('Failed to load host orders', err)
    }
  }

  async function updateStatus(orderId, newStatus) {
    const prevOrders = [...orders]
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    )

    try {
      const orderToUpdate = orders.find((order) => order._id === orderId)
      const updatedOrder = await orderService.save({
        ...orderToUpdate,
        status: newStatus,
      })
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? updatedOrder : order
        )
      )
    } catch (err) {
      console.log('Failed updating order status', err)
      setOrders(prevOrders)
      showErrorMsg('Something went wrong. Pleae try again.')
    }
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat('en-GB').format(date)
  }

  return (
    <section className="reservations">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Guest</th>
            <th>Status</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Booked</th>
            <th>Listing</th>
            <th>Total Payout</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td className="guest-info">
                  <img src={order.guest.imgUrl} />
                  <span>{order.guest.fullname}</span>
                </td>
                <td>{order.status}</td>
                <td>{formatDate(order.startDate)}</td>
                <td>{formatDate(order.endDate)}</td>
                {/* <td>{order.createdAt}</td> */}
                <td>Booked placeholder</td>
                <td>{order.stay.name}</td>
                <td>${order.totalPrice}</td>
                {order.status === 'pending' ? (
                  <td>
                    <button
                      onClick={() => updateStatus(order._id, 'approved')}
                      className="btn-approve"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(order._id, 'rejected')}
                      className="btn-reject"
                    >
                      Reject
                    </button>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
