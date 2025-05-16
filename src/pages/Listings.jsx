import { useEffect, useState } from "react"
import { ReservationTable } from "../cmps/DashboardPage/ReserationTable"
import { sellerService } from "../services/seller/index"

export function ListingsPage() {
  const [sales, setSales] = useState([])
  const [stats, setStats] = useState(null)

  useEffect(() => {
    sellerService.getDashboardStats().then(setStats)
    sellerService.query().then(setSales)
  }, [])
  if (!stats) return <p>Loading...</p>

  return (
    <section className="listings-main">
      <h1>Listings</h1>
      <section className="reservation-table">
        <ReservationTable sales={sales} setStats={setStats} />
      </section>
    </section>
  )
}
