import { useEffect } from 'react'

export function ReviewModal({ reviews, onClose }) {
  function handleBackdropClick(ev) {
    if (ev.target === ev.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    function handleEsc(ev) {
      if (ev.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <section className="modal-review" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="btn-close-modal" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-review-header">Reviews</h2>

        <div className="all-reviews-list">
          {reviews.map((review, idx) => (
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
                    {review.date || 'Unknown date'}
                  </p>
                </div>
              </div>
              <p className="review-text">{review.txt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
