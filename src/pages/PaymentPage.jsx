export function PaymentPage() {
  return (
    <section className="payment-page">
      <div className="payment-container">
        {/* ===== Left Side ===== */}
        <div className="payment-left">
          <h1 className="back-to-detail">Request to book</h1>
          {/* Payment Method */}
          <section className="payment-method-box">
            <h3 className="section-title">Payment method</h3>
            <div className="payment-method-card">
              <div className="card-display">
                <img src="/icons/visa.svg" alt="Visa" className="card-icon" />
                <span className="card-last4">1234</span>
              </div>

              <div className="change-btn-wrapper">
                <button className="btn-change">Change</button>
              </div>
            </div>
          </section>

          {/* Message to Host */}
          <section className="message-to-host">
            <h3>Write a message to the host</h3>
            <p>
              Before you can continue, let the host know a little about your
              trip and why their place is a good fit.
            </p>
            <textarea
              placeholder="Example: 'Hi Amir, my partner and I are going to a friend’s wedding and your place is right down the street.'"
              rows="5"
            ></textarea>
          </section>
          <p className="confirmation-note">
            The host has 24 hours to confirm your booking. You’ll be charged
            after the request is accepted.
          </p>

          <button className="btn-request">Request to book</button>
        </div>

        {/* ===== Right Side ===== */}
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
                  <span className="superhost">• Superhost</span>
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
          <section className="price-breakdown summary-section ">
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

          {/* Rare find note */}
          <div className="rare-find">
            <a href="#" className="price-link">
              Price breakdown
            </a>
          </div>
        </aside>
      </div>
      <div className="payment-summary-bottom">
        <span className="icon">💎</span>
        <p>This is a rare find.</p>
        <p>Amir place is usually booked.</p>
      </div>
    </section>
  )
}
