// import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import { orderService } from '../services/order'
// import { updateOrder } from '../store/actions/order.actions'
// import { showErrorMsg } from '../services/event-bus.service'

export function Reservations() {
  // const loggedInUser = useSelector(
  //   (storeState) => storeState.userModule.loggedInUser
  // )
  const [orders, setOrders] = useState([])

  const demoOrders = [
    {
      _id: 'o110',
      status: 'approved',
      startDate: '2025-07-05',
      endDate: '2025-07-10',
      createdAt: '2025-05-20T10:50:00Z',
      totalPrice: 700,
      guest: {
        _id: 'u210',
        fullname: 'Jenny Feldman',
        imgUrl: 'https://i.pravatar.cc/150?img=20',
      },
      stay: { _id: 's110', name: 'Lakeside Retreat' },
    },
    {
      _id: 'o109',
      status: 'rejected',
      startDate: '2025-08-10',
      endDate: '2025-08-15',
      createdAt: '2025-05-19T16:20:00Z',
      totalPrice: 800,
      guest: {
        _id: 'u209',
        fullname: 'Itay Levy',
        imgUrl: 'https://i.pravatar.cc/150?img=19',
      },
      stay: { _id: 's110', name: 'Lakeside Retreat' },
    },
    {
      _id: 'o108',
      status: 'approved',
      startDate: '2025-07-20',
      endDate: '2025-07-24',
      createdAt: '2025-05-18T13:40:00Z',
      totalPrice: 580,
      guest: {
        _id: 'u208',
        fullname: 'Hannah Azulay',
        imgUrl: 'https://i.pravatar.cc/150?img=18',
      },
      stay: { _id: 's110', name: 'Lakeside Retreat' },
    },
    {
      _id: 'o107',
      status: 'pending',
      startDate: '2025-06-30',
      endDate: '2025-07-02',
      createdAt: '2025-05-17T11:00:00Z',
      totalPrice: 310,
      guest: {
        _id: 'u207',
        fullname: 'Gabe Cohen',
        imgUrl: 'https://i.pravatar.cc/150?img=17',
      },
      stay: { _id: 's110', name: 'Lakeside Retreat' },
    },
    {
      _id: 'o106',
      status: 'rejected',
      startDate: '2025-08-01',
      endDate: '2025-08-04',
      createdAt: '2025-05-16T12:10:00Z',
      totalPrice: 390,
      guest: {
        _id: 'u206',
        fullname: 'Fay Levin',
        imgUrl: 'https://i.pravatar.cc/150?img=16',
      },
      stay: { _id: 's105', name: 'Quiet Cabin in the Woods' },
    },
    {
      _id: 'o105',
      status: 'pending',
      startDate: '2025-07-10',
      endDate: '2025-07-15',
      createdAt: '2025-05-15T09:30:00Z',
      totalPrice: 680,
      guest: {
        _id: 'u205',
        fullname: 'Eli Johnson',
        imgUrl: 'https://i.pravatar.cc/150?img=15',
      },
      stay: { _id: 's105', name: 'Quiet Cabin in the Woods' },
    },
    {
      _id: 'o104',
      status: 'approved',
      startDate: '2025-06-20',
      endDate: '2025-06-23',
      createdAt: '2025-05-14T14:00:00Z',
      totalPrice: 420,
      guest: {
        _id: 'u204',
        fullname: 'Dana Smith',
        imgUrl: 'https://i.pravatar.cc/150?img=14',
      },
      stay: { _id: 's105', name: 'Quiet Cabin in the Woods' },
    },
    {
      _id: 'o103',
      status: 'pending',
      startDate: '2025-07-01',
      endDate: '2025-07-03',
      createdAt: '2025-05-13T17:45:00Z',
      totalPrice: 300,
      guest: {
        _id: 'u203',
        fullname: 'Charlie Rose',
        imgUrl: 'https://i.pravatar.cc/150?img=13',
      },
      stay: { _id: 's101', name: 'Cozy Cottage in Nature' },
    },
    {
      _id: 'o102',
      status: 'pending',
      startDate: '2025-06-10',
      endDate: '2025-06-15',
      createdAt: '2025-05-11T08:30:00Z',
      totalPrice: 750,
      guest: {
        _id: 'u202',
        fullname: 'Bob Stone',
        imgUrl: 'https://i.pravatar.cc/150?img=12',
      },
      stay: { _id: 's101', name: 'Cozy Cottage in Nature' },
    },
    {
      _id: 'o101',
      status: 'pending',
      startDate: '2025-06-01',
      endDate: '2025-06-05',
      createdAt: '2025-05-10T12:00:00Z',
      totalPrice: 540,
      guest: {
        _id: 'u201',
        fullname: 'Alice Green',
        imgUrl: 'https://i.pravatar.cc/150?img=11',
      },
      stay: { _id: 's101', name: 'Cozy Cottage in Nature' },
    },
  ]

  useEffect(() => {
    setOrders(demoOrders)
  }, [])

  ///////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   loadOrders()
  // }, [loggedInUser])

  // async function loadOrders() {
  //   const filterBy = { hostId: loggedInUser._id }
  //   try {
  //     const orders = await orderService.query(filterBy)
  //     setOrders(orders)
  //   } catch (err) {
  //     console.log('Failed to load host orders', err)
  //   }
  // }

  // async function updateStatus(orderId, newStatus) {
  //   const prevOrders = [...orders]
  //   setOrders((prevOrders) =>
  //     prevOrders.map((order) =>
  //       order._id === orderId ? { ...order, status: newStatus } : order
  //     )
  //   )

  //   try {
  //     const orderToUpdate = orders.find((order) => order._id === orderId)
  //     const updatedOrder = await orderService.save({
  //       ...orderToUpdate,
  //       status: newStatus,
  //     })
  //     setOrders((prevOrders) =>
  //       prevOrders.map((order) =>
  //         order._id === orderId ? updatedOrder : order
  //       )
  //     )
  //   } catch (err) {
  //     console.log('Failed updating order status', err)
  //     setOrders(prevOrders)
  //     showErrorMsg('Something went wrong. Pleae try again.')
  //   }
  // }
  //////////////////////////////////////////////////////////////////////

  function updateStatus(orderId, newStatus) {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    )
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
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Booked</th>
            <th>Listing</th>
            <th>Total Payout</th>
            <th>Status</th>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order._id}>
                <td data-label="Guest" className="guest-info">
                  <img src={order.guest.imgUrl} alt={order.guest.fullname} />
                  <span>{order.guest.fullname}</span>
                </td>
                <td data-label="Check-in">{formatDate(order.startDate)}</td>
                <td data-label="Check-out">{formatDate(order.endDate)}</td>

                <td data-label="Booked">{formatDate(order.createdAt)}</td>
                {/* <td>{order.createdAt}</td> */}
                {/* <td>Booked placeholder</td> */}

                <td data-label="Listing">{order.stay.name}</td>
                <td data-label="Total Payout">${order.totalPrice}</td>

                {/* <td>{order.status}</td> */}
                <td data-label="Status" className={`status ${order.status}`}>{order.status}</td>

                <td data-label="Todo">
                  <button
                    onClick={() => updateStatus(order._id, 'approved')}
                    className={`btn-approve ${
                      order.status === 'approved' ? 'active' : ''
                    }`}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(order._id, 'rejected')}
                    className={`btn-reject ${
                      order.status === 'rejected' ? 'active' : ''
                    }`}
                  >
                    Reject
                  </button>
                </td>

                {/* {order.status === 'pending' && (
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
                )} */}

              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
