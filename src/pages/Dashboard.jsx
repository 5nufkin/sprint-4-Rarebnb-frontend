import { DashboardOverviewSales } from "../cmps/DashboardPage/Overview"
import { StatsCards } from "../cmps/DashboardPage/StatsCards"

export function Dashboard() {
  return (
    <section className="dashboard-main">
      <h4>Review & analyze your data</h4>
      <section className="sales-cards">
        <StatsCards />
      </section>
      <section className="overview-chart">
        <DashboardOverviewSales />
      </section>
    </section>
  )
}
