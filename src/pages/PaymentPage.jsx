import { BookingSummary } from "../cmps/PaymentPage/BookingSummary"
import { MessageToHost } from "../cmps/PaymentPage/MessageToHost"
import { PaymentMethod } from "../cmps/PaymentPage/PaymentMethod"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { stayService } from "../services/stay"
import { ReservationSuccess } from "../cmps/Icons"
import { RareFindDiamond } from "../cmps/PaymentPage/RareFindDiamond"
import { GlowButton } from "../cmps/PaymentPage/GlowButton"
import { placeOrder } from "../store/actions/order.actions"
import { useSelector } from "react-redux"

export function PaymentPage() {
  const [stay, setStay] = useState(null)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const { stayId } = useParams()
  const navigate = useNavigate()
  const orderToSave = useSelector(
    (storeState) => storeState.orderModule.orderToSave
  )
  useEffect(() => {
    if (orderToSave) {
      localStorage.setItem('orderToSave', JSON.stringify(orderToSave))
    }
  }, [orderToSave])

  useEffect(() => {
    async function loadStay() {
      try {
        const stay = await stayService.getById(stayId)
        setStay(stay)
      } catch (err) {
        console.error('Error fetching stay:', err)
      }
    }
    loadStay()
  }, [stayId])

  function onConfirmOrder() {
    setIsConfirmed(true)
    placeOrder(orderToSave)
  }

  if (!stay) return <div>Loading…</div>

  return (
    <section className="payment-page">
      {!isConfirmed && <h1 className="back-to-detail">Request to book</h1>}
      <div className="main-payment-grid">
        {/* SIDE: RIGHT */}
        <div className="booking-summary-wrapper">
          <BookingSummary isConfirmed={isConfirmed} />
          {!isConfirmed && <RareFindDiamond />}
        </div>

        {/* SIDE: LEFT */}
        <div className="payment-left">
          {!isConfirmed ? (
            <>
              <div className="payment-method-wrapper">
                <PaymentMethod />
              </div>
              <MessageToHost />
              <div className="confirm-wrapper">
                <GlowButton className="btn-request" onClick={onConfirmOrder}>
                  Request to book
                </GlowButton>
              </div>
            </>
          ) : (
            <div className="confirmation-success">
              <h2 className="success-header">
                <ReservationSuccess /> Reservation success!
              </h2>
              <div className="rare-find-confirmation">
                <RareFindDiamond />
              </div>
              <div className="right-side-confirmation">
                <p>
                  Your trip has been confirmed. We look forward to hosting you!
                </p>
                <GlowButton
                  className="btn-request"
                  onClick={() => navigate('/trips')}
                >
                  Review Trips
                </GlowButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
