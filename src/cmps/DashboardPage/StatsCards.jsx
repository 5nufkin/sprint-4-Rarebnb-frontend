import {
  DashboardAverageIcon,
  DashboardRefundedIcon,
  DashboardStatHandsIcon,
  DashboardTotalCustomersIcon,
} from "../Icons"

export function StatsCards({ stats }) {
  const displayStats = [
    {
      label: "Total sales",
      value: `$${stats.totalRevenue.toFixed(2)}`,
      icon: <DashboardStatHandsIcon />,
    },
    {
      label: "Total customers",
      value: stats.totalCustomers,
      icon: <DashboardTotalCustomersIcon />,
    },
    {
      label: "Refunded",
      value: stats.refunded,
      icon: <DashboardRefundedIcon />,
    },
    {
      label: "Average revenue",
      value: `$${stats.avgRevenue}`,
      icon: <DashboardAverageIcon />,
    },
  ]

  return (
    <section className="stats-cards">
      {displayStats.map((stat, idx) => (
        <article key={idx} className="stat-card">
          <div className="stat-header">
            <h4>{stat.label}</h4>
            {stat.icon}
          </div>
          <p className="value">{stat.value}</p>
        </article>
      ))}
    </section>
  )
}
