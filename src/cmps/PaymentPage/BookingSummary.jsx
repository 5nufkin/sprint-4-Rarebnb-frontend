import { DiamondIcon, StarIcon } from "../Icons"

import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { stayService } from "../../services/stay/stay.service.local"
import { useLocation } from 'react-router-dom'


export function BookingSummary() {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()
  const { state } = useLocation()
  const { checkIn, checkOut, guests, nights, pricePerNight, cleaningFee, serviceFee, total } = state

  const checkInStr  = checkIn  ? checkIn.toLocaleDateString()  : '––'
  const checkOutStr = checkOut ? checkOut.toLocaleDateString() : '––'

  function totalGuests(g) {
    return g.adults + g.children + g.infants + g.pets
  }


  useEffect(() => {
    stayService
      .getById(stayId)
      .then((stay) => {
        setStay(stay)
      })
      .catch((err) => {
        console.error("Error fetching stay:", err)
      })
  }, [stayId])

  if (!stay) return <div>Loading…</div>

  return (
    <div className="payment-right">
      <aside className="payment-summary">
        {/* Stay Summary */}
        <section className="stay-summary">
          <div className="stay-header">
            <img src={stay.imgUrls[0]} alt="Stay" className="stay-img" />
            <div className="stay-info">
              <h3>{stay.name}</h3>
              <div className="rating-line">
                <span>
                  <StarIcon />
                  4.88 (78)
                </span>
                <span className="superhost"> • Superhost</span>
              </div>
            </div>
          </div>
          <p className="cancel-policy">
            Cancel before check-in on {checkInStr} for a partial refund.{" "}
            <a href="#" className="full-policy">Full policy</a>
          </p>
        </section>

        {/* Trip Details */}
        <section className="trip-details summary-section">
          <div className="section-header">
            <h4>Trip details</h4>
            <button className="btn-change">Change</button>
          </div>
          <div className="trip-info">
            <p>{checkInStr} – {checkOutStr}</p>
            <p>{totalGuests(guests)} guests</p>
          </div>
        </section>

        {/* Price Breakdown */}
        <section className="price-breakdown summary-section">
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
            <span>
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

      {/* Rare Find Note */}
      <div className="payment-summary-bottom">
        <div className="diamond-icon">
          <DiamondIcon />
        </div>
        <div className="diamond-text">
          <p className="diamond-text-first-row">This is a rare find.</p>
          <p className="diamond-text-second-row">
            Amirs place is usually booked.
          </p>
        </div>
      </div>
    </div>
  )
}
