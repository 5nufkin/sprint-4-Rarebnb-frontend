export function AmenitiesGrid({ amenities = [] }) {
  return (
    <section>
      <h2>Amenities</h2>
      <ul className="amenities-grid">
        {amenities.map((am, idx) => <li key={idx}>{am}</li>)}
      </ul>
    </section>
  )
}
