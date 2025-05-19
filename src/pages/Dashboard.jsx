import { useEffect, useState } from "react"
import { sellerService } from "../services/seller/index"

import { StatsCards } from "../cmps/DashboardPage/StatsCards"
import { DashboardOverviewSales } from "../cmps/DashboardPage/Overview"
import { HeatMap } from "../cmps/DashboardPage/HeatMap"

export function Dashboard() {
  const [stats, setStats] = useState(null)
  const [sales, setSales] = useState([])
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const stats = await sellerService.getDashboardStats()
        const sales = await sellerService.query()
        const countryData = await sellerService.getSalesByCountry()

        setStats(stats)
        setSales(sales)
        setCountryData(countryData)
      } catch (err) {
        console.error("Failed to load dashboard data:", err)
      }
    }

    loadDashboardData()
  }, [])

  if (!stats) return <p>Loading...</p>

  return (
    <section className="dashboard-main">
      <div className="dashboard-container">
        <h4>Review & analyze your data</h4>

        <section className="sales-cards">
          <StatsCards stats={stats} />
        </section>

        <div className="dashboard-second-line">
          <section className="overview-chart">
            <DashboardOverviewSales stats={stats} />
          </section>

          <section className="heat-chart">
            <HeatMap dataByCountry={countryData} />
          </section>
        </div>
      </div>
    </section>
  )
}
