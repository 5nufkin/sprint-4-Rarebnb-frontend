export function BookingWidget({ stay }) {
  return (
    <div className="booking-widget">
      <div className="price-line">
        <span className="price">₪{stay.price}</span> night
      </div>

      <div className="date-picker">
        <input type="date" /> <input type="date" />
      </div>

      <button className="btn-request">Reserve</button>

      <p className="note">You won’t be charged yet</p>
    </div>
  )
}
