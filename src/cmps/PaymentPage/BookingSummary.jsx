import { DiamondIcon, StarIcon } from "../Icons"

import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { stayService } from "../../services/stay/index"
import { useLocation } from "react-router-dom"
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service"

export function BookingSummary({isConfirmed}) {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()
  const { state } = useLocation()
  const {
    checkIn,
    checkOut,
    guests,
    nights,
    pricePerNight,
    cleaningFee,
    serviceFee,
    total,
  } = state

  const checkInStr = checkIn ? checkIn.toLocaleDateString() : "––"
  const checkOutStr = checkOut ? checkOut.toLocaleDateString() : "––"

  function totalGuests(guests) {
    return guests.adults + guests.children + guests.infants + guests.pets
  }

  useEffect(() => {
    async function loadStay() {
      try {
        const stay = await stayService.getById(stayId)
        setStay(stay)
        showSuccessMsg()
      } catch (err) {
        showErrorMsg()
        console.error("Error fetching stay:", err)
      }
    }

    loadStay()
  }, [stayId])

  if (!stay) return <div>Loading…</div>
  const reviews = stay.reviews || []
  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rate, 0) / reviews.length
        ).toFixed(2)
      : "–"
  return (
    <div className="payment-right">
      <aside className="booking-summary">
        {/* Stay Summary */}
        <section className="stay-summary">
          <div className="stay-header">
            <img src={stay.imgUrls[0]} alt="Stay" className="stay-img" />
            <div className="stay-info">
              <h3>{stay.name}</h3>
              <div className="rating-line">
                <span>
                  <StarIcon />
                  {avgRating} ({reviews.length})
                </span>
                {stay.isSuperhost && (
                  <span className="superhost"> • Superhost</span>
                )}
              </div>
            </div>
          </div>
          <p className="cancel-policy">
            Cancel before check-in on {checkInStr} for a partial refund.{" "}
            <a href="#" className="full-policy">
              Full policy
            </a>
          </p>
        </section>

        {/* Trip Details */}
        <section className="dates-check-in-out summary-section">
          <div className="section-header">
            <h4>Trip details</h4>

            {!isConfirmed && <button className="btn-change">Change</button>}

          </div>
          <div className="trip-info">
            <p className="check-in-out">
              {checkInStr} – {checkOutStr}
            </p>
            <p className="check-in-out">{totalGuests(guests)} guests</p>
          </div>
        </section>

        {/* Price details */}
        <section className="price-details summary-section">
          <h4>Price details</h4>
          <div className="price-line">
            <span>
              ₪{pricePerNight} x {nights} nights
            </span>
            <span>₪{(nights * stay.price).toFixed(2)}</span>
          </div>
          <div className="price-line">
            <span>Cleaning fee</span>
            <span>₪{cleaningFee}</span>
          </div>
          <div className="price-line">
            <span>Airbnb service fee</span>
            <span>₪{serviceFee.toFixed(2)}</span>
          </div>
          <div className="price-total summary-section">
            <span className="price-link">
              Total <span className="currency">ILS</span>
            </span>
            <span>₪{total}</span>
          </div>
        </section>

        {/* Policy Link */}
        <div className="rare-find">
          <a href="#" className="price-link">
            Price breakdown
          </a>
        </div>
      </aside>
    </div>
  )
}
