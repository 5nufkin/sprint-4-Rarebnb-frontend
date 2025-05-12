import { DiamondIcon } from "../Icons"

export function BookingSummary() {
  return (
    <div className="payment-right">
      <aside className="payment-summary">
        {/* Stay Summary */}
        <section className="stay-summary">
          <div className="stay-header">
            <img
              src="https://a0.muscache.com/im/pictures/65e59e50-cd82-45b6-959b-a310711fd7c7.jpg?im_w=960"
              alt="Stay"
              className="stay-img"
            />
            <div className="stay-info">
              <h3>Hayarkon/BenGurion Beach and Sea View Luxury Suite</h3>
              <div className="rating-line">
                <span>⭐ 4.88 (78)</span>
                <span className="superhost"> • Superhost</span>
              </div>
              <p className="cancel-policy">
                Cancel before check-in on May 13 for a partial refund.{" "}
                <a href="#">Full policy</a>
              </p>
            </div>
          </div>
        </section>

        {/* Trip Details */}
        <section className="trip-details summary-section">
          <div className="section-header">
            <h4>Trip details</h4>
            <button className="btn-change">Change</button>
          </div>
          <div className="trip-info">
            <p>May 13 – 18, 2025</p>
            <p>1 adult</p>
          </div>
        </section>

        {/* Price Breakdown */}
        <section className="price-breakdown summary-section">
          <h4>Price details</h4>
          <div className="price-line">
            <span>₪450.00 x 5 nights</span>
            <span>₪2,250.00</span>
          </div>
          <div className="price-line">
            <span>Cleaning fee</span>
            <span>₪180.00</span>
          </div>
          <div className="price-line">
            <span>Airbnb service fee</span>
            <span>₪343.06</span>
          </div>
          <div className="price-total summary-section">
            <span>
              Total <span className="currency">ILS</span>
            </span>
            <span>₪2,773.06</span>
          </div>
        </section>

        {/* Policy Link */}
        <div className="rare-find">
          <a href="#" className="price-link">
            Price breakdown
          </a>
        </div>
      </aside>

      {/* Rare Find Note */}
      <div className="payment-summary-bottom">
        <DiamondIcon />
        <div className="diamond-text">
          <p>
            <strong>This is a rare find.</strong>
          </p>
          <p>Amirs place is usually booked.</p>
        </div>
      </div>
    </div>
  )
}
