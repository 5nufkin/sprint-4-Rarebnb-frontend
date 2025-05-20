export function LocationMap({ location }) {
  const { lat, lng } = location || {}
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`
  return (
    <section className="map-section">
      <h2 className="where-title">Where you'll be</h2>
      <iframe title="map" src={src} loading="lazy"></iframe>
    </section>
  )
}
