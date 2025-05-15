export function DashboardOverviewSales({ stats }) {
  if (!stats) return null

  return (
    <section className="overview-sale">
      <h4>Overview</h4>
      <ul className="sales-chart">
        <li className="overview-stat">
          <span>Stays in list</span> <span>{stats.staysInList}</span>
        </li>
        <li className="overview-stat">
          <span>Total orders</span> <span>{stats.totalSales}</span>
        </li>
        <li className="overview-stat">
          <span>Refunded</span> <span>{stats.refunded}</span>
        </li>
        <li className="overview-stat">
          <span>Average revenue</span> <span>${stats.avgRevenue}</span>
        </li>
      </ul>
    </section>
  )
}
