import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { GuestsSelector } from './GuestsSelector.jsx'
import { useNavigate } from 'react-router-dom'
import { GlowButton } from '../PaymentPage/GlowButton.jsx'
import { FaFlag } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";


export function BookingWidget({ stay }) {
  const [checkIn,  setCheckIn]  = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [guests,   setGuests]   = useState({ adults:1, children:0, infants:0, pets:0 })

  const nights       = checkIn && checkOut ? Math.round((checkOut - checkIn) / 864e5) : 0
  const subtotal     = nights * stay.price
  const cleaningFee  = 30
  const serviceFee   = Math.round(subtotal * 0.18)
  const total        = subtotal + serviceFee + cleaningFee
  const pricePerNight = stay.price

  const navigate = useNavigate()

  function onReserve() {
    if (!nights) return

    navigate(`/stay/${stay._id}/payment`, {
      state: {
        stayId: stay._id,
        checkIn, checkOut,
        guests,
        nights,
        pricePerNight,
        cleaningFee,
        serviceFee,
        total,
      }
    })
  }

  return (
    <>
    <div className="booking-widget">
      <div className="rare-banner">
        <IoDiamond />
        Rare find! This place is usually booked
      </div>

      <div className="stay-price-line">
        <span className="stay-price">₪{stay.price.toLocaleString()}</span>
        <span className="stay-per">night</span>
      </div>


      <div className="field-grid">
        <div className="field-cell">
          <label>CHECK-IN</label>
          <DatePicker
            selected={checkIn}
            onChange={d => { setCheckIn(d); if (d > checkOut) setCheckOut(null) }}
            selectsStart startDate={checkIn} endDate={checkOut}
            placeholderText="Add date"
            className="date-input"
          />
        </div>

        <div className="field-cell">
          <label>CHECKOUT</label>
          <DatePicker
            selected={checkOut}
            onChange={setCheckOut}
            selectsEnd startDate={checkIn} endDate={checkOut}
            minDate={checkIn}
            placeholderText="Add date"
            className="date-input"
          />
        </div>

        <div className="field-cell guests-cell">
          <label>GUESTS</label>
          <GuestsSelector value={guests} onChange={setGuests} />
        </div>
      </div>

      <GlowButton className="reserve-btn glow-buton" disabled={!nights} onClick={onReserve}>Reserve</GlowButton>
      <p className="note">You won’t be charged yet</p>
      {/* <button className="reserve-btn" disabled={!nights} onClick={onReserve}>Reserve</button>
      <p className="note">You won’t be charged yet</p> */}

      {nights > 0 && (
        <div className="breakdown">
          <div><a>₪{stay.price} X {nights} night{nights > 1 && 's'}</a><span>₪{subtotal.toLocaleString()}</span></div>
          <div><a>Airbnb service fee</a><span>₪{serviceFee.toLocaleString()}</span></div>
          <div><a>Cleaning & Service fee</a><span>₪{cleaningFee.toLocaleString()}</span></div>
          <hr />
          <div className="total"><span>Total</span><span>₪{total.toLocaleString()}</span></div>
        </div>
      )}

      
    </div>
    <a className="report-link" href="#">
      <FaFlag size={14} style={{ marginRight: 6 }} />
      Report this listing</a>
    </>
  )
}
