export function HostSummary({ host }) {
  if (!host) return null

  return (
    <div className="host-summary">
      <img
        src={host.imgUrl}
        alt={host.fullname}
        className="host-avatar"
      />

      <div className="host-txt">
        <h3 className="host-title">Hosted by {host.fullname}</h3>
        <p className="host-sub">Superhost · 4 years hosting</p>
      </div>
    </div>
  )
}
