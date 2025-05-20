import { useEffect, useState } from "react"
import { ReservationTable } from "../cmps/DashboardPage/ReserationTable"
import { sellerService } from "../services/seller/index"
import { SOCKET_EVENT_ORDER_ADDED, socketService } from "../services/socket.service"
import { showSuccessMsg } from "../services/event-bus.service"

export function ListingsPage() {
  const [sales, setSales] = useState([])
  const [stats, setStats] = useState(null)

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const stats = await sellerService.getDashboardStats()
        const sales = await sellerService.query()

        setStats(stats)
        setSales(sales)
      } catch (err) {
        console.error("Failed to load dashboard stats or sales:", err)
      }
    }
    loadDashboardData()
  }, [])

  useEffect(() => {
    socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
      showSuccessMsg(`New reservation at ${order.stay.name}!`)
      console.log('NEW ORDER _ IT WORKED!')
    })
    return () => {
      socketService.off(SOCKET_EVENT_ORDER_ADDED)
    }
  }, [])

  if (!stats) return <p>Loading...</p>

  return (
    <section className="listings-main">
      <section className="reservation-table">
        <ReservationTable sales={sales} setStats={setStats} />
      </section>
    </section>
  )
}
