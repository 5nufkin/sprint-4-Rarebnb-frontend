import { useState } from 'react'
import { EmptyStarIcon, StarIcon, StarIconHeader } from '../Icons'
import { ReviewModal } from '../ReviewModal'

const REVIEWS_PREVIEW_COUNT = 6

export function ReviewsSection({ stay }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const reviewsToPreview = stay.reviews.slice(0, REVIEWS_PREVIEW_COUNT)
  const [expandedReviews, setExpandedReviews] = useState({})

  function toggleExpand(idx) {
    setExpandedReviews((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  function getTrimmedText(txt, isExpanded) {
    const words = txt.split(' ')
    if (isExpanded || words.length <= 50) return txt
    return words.slice(0, 50).join(' ') + '...'
  }

  return (
    <section className="reviews-section">
      {/* Reviews header  */}
      <h2 className="reviews-list-header">
        <StarIconHeader /> {stay.avgRating.toFixed(2)} · {stay.reviews.length}{' '}
        reviews
      </h2>

      <div className="reviews-grid">
        {reviewsToPreview.map((review, idx) => (
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
                  {review.by.location || 'Traveler'}
                </p>
                <p className="review-location">{review.by.country}</p>
              </div>
            </div>

            <div className="review-date">
              {Array.from({ length: +review.rate }, (_, i) => (
                <StarIcon key={'full-' + i} />
              ))}
              {Array.from({ length: 5 - +review.rate }, (_, i) => (
                <EmptyStarIcon key={'empty-' + i} />
              ))}
              <span className="separating-dot">·</span>
              <span>{review.date || 'Oct 2024'}</span>
            </div>

            <p className="review-text">
              {getTrimmedText(review.txt, expandedReviews[idx])}
            </p>
            {review.txt.split(' ').length > 100 && (
              <button
                className="btn-show-more"
                onClick={() => toggleExpand(idx)}
              >
                {expandedReviews[idx] ? 'Show less' : 'Show more'}
              </button>
            )}
          </article>
        ))}
      </div>

      {stay.reviews.length > REVIEWS_PREVIEW_COUNT && (
        <button
          className="btn-all-reviews"
          onClick={() => setIsModalOpen(true)}
        >
          <span>Show all {stay.reviews.length} reviews</span>
        </button>
      )}

      {isModalOpen && (
        <ReviewModal
          reviews={stay.reviews}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  )
}
