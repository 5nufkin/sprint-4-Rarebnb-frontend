// import { useEffect, useState } from "react"
// import { useParams } from "react-router"
import { stayService } from "../../services/stay/stay.service.local"
import { StarIcon } from "../Icons"

export function ReviewsSection({ stay }) {
  console.log("Loaded stay:", stay)
  console.log("Reviews:", stay.reviews)

  const avgRating = stay.reviews?.length
    ? stay.reviews.reduce((sum, review) => sum + review.rate, 0) /
      stay.reviews.length
    : 0

  return (
    <section className="reviews-section">
      <h2>
        <StarIcon /> {avgRating.toFixed(1)} · {stay.reviews.length} reviews
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
            <div className="review-date">
              {[...Array(review.rate)].map((_, i) => (
                <StarIcon key={i} />
              ))}
              <span>{review.date || "Oct 2024"}</span>
            </div>
            <p className="review-text">{review.txt}</p>
            {review.txt.length > 50 && (
              <button className="btn-show-more">Show more</button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
