import { EmptyStarIcon, StarIcon } from "../Icons"

export function ReviewsSection({ stay }) {
  const avgRating = stay.reviews?.length
    ? stay.reviews.reduce((sum, review) => sum + review.rate, 0) /
      stay.reviews.length
    : 0

  return (
    <section className="reviews-section">
      <h2>
        <div><StarIcon /></div>{avgRating.toFixed(1)} · {stay.reviews.length} reviews
      </h2>

      <div className="reviews-grid">
        {stay.reviews.map((review, idx) => (
          <article key={idx} className="review-card">
            <div className="review-header">
              <img
                src={review.by.imgUrl}
                alt={review.by.fullname}
                className="review-avatar"
              />
              <div>
                <h4>{review.by.fullname}</h4>
                <p className="review-location">
                  {review.by.location || "Traveler"}
                </p>
                <p className="review-location">{review.by.country}</p>
              </div>
            </div>

            {/* Review stars and date  */}
            <div className="review-date">
              {Array.from({ length: +review.rate }, (_, i) => (
                <StarIcon key={"full-" + i} />
              ))}
              {Array.from({ length: 5 - +review.rate }, (_, i) => (
                <EmptyStarIcon key={"empty-" + i} />
              ))}
              <span className="separating-dot">·</span>
              <span>{review.date || "Oct 2024"}</span>
            </div>

            <p className="review-text">{review.txt}</p>
            {review.txt.length > 100 && (
              <button className="btn-show-more">Show more</button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
