export function HostCard({ host }) {
  return (
    <section className="host-card">
      <img src={host.imgUrl} alt={host.fullname} />
      <div>
        <h3>Hosted by {host.fullname}</h3>
        <p>Superhost since 2019</p>
        <button className="btn-contact">Contact host</button>
      </div>
    </section>
  )
}
