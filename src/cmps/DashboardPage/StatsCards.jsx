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
      diff: -5,
      isPositive: false,
      icon: <DashboardStatHandsIcon />,
    },
    {
      label: "Total customers",
      value: stats.totalCustomers,
      diff: 10,
      isPositive: true,
      icon: <DashboardTotalCustomersIcon />,
    },
    {
      label: "Refunded",
      value: stats.refunded,
      diff: -2,
      isPositive: false,
      icon: <DashboardRefundedIcon />,
    },
    {
      label: "Average revenue",
      value: `$${stats.avgRevenue}`,
      diff: 5,
      isPositive: true,
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

          {typeof stat.diff === "number" && (
            <div className="diff">
              <span className={stat.isPositive ? "positive" : "negative"}>
                {stat.isPositive ? `+${stat.diff}%` : `${stat.diff}%`}
              </span>{" "}
              compared to last month
            </div>
          )}
        </article>
      ))}
    </section>
  )
}
