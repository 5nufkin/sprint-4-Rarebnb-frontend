import { stayService } from "../../services/stay/stay.service.local"

export function ReviewsSection({stay}) {
  console.log(stay);


  
  return (
    <section className="reviews-section">
      <h2>★★★★★ 5.0 · {stay.reviews.length} reviews</h2>

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
                <p className="review-location">Traveler</p>
                <p className="review-date">★ {review.rate} · Oct 2024</p>
              </div>
            </div>
            <p className="review-text">{review.txt}</p>
            {review.txt.length > 120 && (
              <button className="btn-show-more">Show more</button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
