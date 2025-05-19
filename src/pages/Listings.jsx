import { useEffect, useState } from "react"
import { ReservationTable } from "../cmps/DashboardPage/ReserationTable"
import { sellerService } from "../services/seller/index"

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

  if (!stats) return <p>Loading...</p>

  return (
    <section className="listings-main">
      <section className="reservation-table">
        <ReservationTable sales={sales} setStats={setStats} />
      </section>
    </section>
  )
}
