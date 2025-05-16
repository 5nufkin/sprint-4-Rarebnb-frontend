// import { useEffect, useState } from "react"
// import { sellerService } from "../services/seller/index"
// // import salesData from "../assets/maps/world.geo.json"

// import { StatsCards } from "../cmps/DashboardPage/StatsCards"
// import { DashboardOverviewSales } from "../cmps/DashboardPage/Overview"
// import { HeatMap } from "../cmps/DashboardPage/HeatMap"
// import { ReservationTable } from "../cmps/DashboardPage/ReserationTable"
// import { sales } from "../services/seller/seller.service.local"

// export function Dashboard() {
//   const [stats, setStats] = useState(null)
//    const [countryData, setCountryData] = useState([])

//   useEffect(() => {
//     sellerService.getDashboardStats().then(setStats)
//   }, [])
//    useEffect(() => {
//     sellerService.getSalesByCountry().then(setCountryData)
//   }, [])

//   if (!stats) return <p>Loading...</p>

//   return (
//     <section className="dashboard-main">
//       <h4>Review & analyze your data</h4>
//       <section className="sales-cards">
//         <StatsCards stats={stats} />
//       </section>
//       <section className="overview-chart">
//         <DashboardOverviewSales stats={stats} />
//       </section>
//       <section className="heat-chart">
//          <HeatMap dataByCountry={countryData} />
//       </section>
//       <section className="reservation-table">
//         <ReservationTable sales={sales}/>
//       </section>
//     </section>
//   )
// }

import { useEffect, useState } from "react"
import { sellerService } from "../services/seller/index"

import { StatsCards } from "../cmps/DashboardPage/StatsCards"
import { DashboardOverviewSales } from "../cmps/DashboardPage/Overview"
import { HeatMap } from "../cmps/DashboardPage/HeatMap"
import { ReservationTable } from "../cmps/DashboardPage/ReserationTable"

export function Dashboard() {
  const [stats, setStats] = useState(null)
  const [sales, setSales] = useState([])
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    sellerService.getDashboardStats().then(setStats)
    sellerService.query().then(setSales)
    sellerService.getSalesByCountry().then(setCountryData)
  }, [])

  if (!stats) return <p>Loading...</p>

  return (
    <section className="dashboard-main">
      <h4>Review & analyze your data</h4>

      <section className="sales-cards">
        <StatsCards stats={stats} />
      </section>

      <section className="overview-chart">
        <DashboardOverviewSales stats={stats} />
      </section>

      <section className="heat-chart">
        <HeatMap dataByCountry={countryData} />
      </section>

      <section className="reservation-table">
        <ReservationTable sales={sales} setStats={setStats} />
      </section>
    </section>
  )
}
