import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { GuestsSelector } from './GuestsSelector.jsx'
import { useNavigate } from 'react-router-dom'
import { GlowButton } from '../PaymentPage/GlowButton.jsx'
import { updateOrderToSave } from '../../store/actions/order.actions.js'
import { useSelector } from 'react-redux'
import { orderService } from '../../services/order/index.js'
import { FaFlag } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";


export function BookingWidget({ stay }) {
  const [guestCountMap, setGuestCountMap] = useState({ adults: 1, children: 0, infants: 0, pets: 0 })
  const orderToSave = useSelector(storeState => storeState.orderModule.orderToSave)

  const {
    numOfNights,
    subTotal,
    cleaningFee,
    serviceFee,
    totalPrice,
    startDate,
    endDate
  } = orderToSave

  useEffect(() => {
    if (!startDate || !endDate) return
    const numOfNights = orderService.getNightCount(startDate, endDate)
    if (numOfNights <= 0) return

    updatePricing(stay.price, numOfNights)
  }, [startDate, endDate])

  const navigate = useNavigate()

  function updatePricing(price, numOfNights) {
    const { subTotal, serviceFee, cleaningFee, totalPrice } =
      orderService.calculateOrderFees(price, numOfNights)

    updateOrderToSave('numOfNights', numOfNights)
    updateOrderToSave('subTotal', subTotal)
    updateOrderToSave('serviceFee', serviceFee)
    updateOrderToSave('cleaningFee', cleaningFee)
    updateOrderToSave('totalPrice', totalPrice)
    updateOrderToSave('pricePerNight', stay.price)
  }

  function onReserve() {
    if (!numOfNights) return
    updateOrderToSave('totalPrice', totalPrice)
    navigate(`/stay/${stay._id}/payment`)
  }

  function handleGuestsChange(updatedGuests) {
    setGuestCountMap(updatedGuests)
    updateOrderToSave('guestCountMap', updatedGuests)
  }

  function handleDateChange(dateType, date) {
    const key = dateType === 'checkIn' ? 'startDate' : 'endDate'
    updateOrderToSave(key, date)
  }

  return (
    <>
      <div className="booking-widget">
        <div className="rare-banner">
          <IoDiamond />
          Rare find! This place is usually booked
        </div>

        <div className="stay-price-line">
          <span className="stay-price">${stay.price.toLocaleString()}</span>
          <span className="stay-per">night</span>
        </div>


        <div className="field-grid">
          <div className="field-cell">
            <label>CHECK-IN</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => handleDateChange('checkIn', date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Add date"
              className="date-input"
            />
          </div>

          <div className="field-cell">
            <label>CHECKOUT</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => handleDateChange('checkOut', date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Add date"
              className="date-input"
            />
          </div>

          <div className="field-cell guests-cell">
            <label>GUESTS</label>
            <GuestsSelector value={guestCountMap} onChange={handleGuestsChange} />
          </div>
        </div>

        <GlowButton
          className="reserve-btn glow-buton"
          disabled={!numOfNights}
          onClick={onReserve}
        >Reserve
        </GlowButton>
        <p className="note">You won't be charged yet</p>

        {numOfNights > 0 && (
          <div className="breakdown">
            <div><a>${stay.price} × {numOfNights} night{numOfNights > 1 && 's'}</a><span>${subTotal.toLocaleString()}</span></div>
            <div><a>Airbnb service fee</a><span>${serviceFee.toLocaleString()}</span></div>
            <div><a>Cleaning & Service fee</a><span>${cleaningFee.toLocaleString()}</span></div>
            <hr />
            <div className="total"><span>Total</span><span>${totalPrice.toLocaleString()}</span></div>
          </div>
        )}
      </div>

      <a className="report-link" href="#">
        <FaFlag size={14} style={{ marginRight: 6 }} />
        Report this listing</a>
    </>
  )
}