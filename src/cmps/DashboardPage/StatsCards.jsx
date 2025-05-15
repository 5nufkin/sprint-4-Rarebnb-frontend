import {
  DashboardAverageIcon,
  DashboardRefundedIcon,
  DashboardStatHandsIcon,
  DashboardTotalCustomersIcon,
} from "../Icons"

export function StatsCards() {
  const stats = [
    {
      label: "Total sales",
      value: "$1995.34",
      diff: "-5%",
      isPositive: false,
    },
    {
      label: "Total customers",
      value: "1250",
      diff: "+10%",
      isPositive: true,
    },
    {
      label: "Refunded",
      value: "34",
      diff: "-2%",
      isPositive: false,
    },
    {
      label: "Average revenue",
      value: "$50.25",
      diff: "+5%",
      isPositive: true,
    },
  ]

  return (
    <section className="stats-cards">
      {stats.map((stat, idx) => (
        <article key={idx} className="stat-card">
          <div className="stat-header">
            <h4>{stat.label}</h4>
            {stat.label === "Total sales" && <DashboardStatHandsIcon />}
            {stat.label === "Average revenue" && <DashboardAverageIcon />}
            {stat.label === "Total customers" && (
              <DashboardTotalCustomersIcon />
            )}
            {stat.label === "Refunded" && <DashboardRefundedIcon />}
          </div>
          <p className="value">{stat.value}</p>
          <p className={`diff ${stat.isPositive ? "positive" : "negative"}`}>
            {stat.diff} compared to last month
          </p>
        </article>
      ))}
    </section>
  )
}
