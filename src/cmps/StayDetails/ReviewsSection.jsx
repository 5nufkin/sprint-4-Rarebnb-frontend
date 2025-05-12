export function ReviewsSection({ reviews = [] }) {
  return (
    <section>
      <h2>{reviews.length} reviews</h2>
      {reviews.map(r => (
        <article key={r.id} className="review">
          <h4>{r.by.fullname}</h4>
          <p>{r.txt}</p>
        </article>
      ))}
    </section>
  )
}
