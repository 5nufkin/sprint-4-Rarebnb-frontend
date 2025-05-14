import { BookingSummary } from "../cmps/PaymentPage/BookingSummary"
import { MessageToHost } from "../cmps/PaymentPage/MessageToHost"
import { PaymentMethod } from "../cmps/PaymentPage/PaymentMethod"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { stayService } from "../services/stay"

export function PaymentPage() {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()

  useEffect(() => {
    async function loadStay() {
      try {
        const stay = await stayService.getById(stayId)
        setStay(stay)
      } catch (err) {
        console.error("Error fetching stay:", err)
      }
    }
    loadStay()
  }, [stayId])

  if (!stay) return <div>Loading…</div>

  return (
    <section className="payment-page">
      <h1 className="back-to-detail">Request to book</h1>

      <div className="main-payment-grid">
        <div className="booking-summary-wrapper">
          <BookingSummary />
        </div>

        <div className="payment-left">
          <div className="payment-method-wrapper">
            <PaymentMethod />
          </div>
          <div className="message-to-host">
            <MessageToHost />
          </div>
        </div>

        <div className="confirm-wrapper">
          <button className="btn-request">Request to book</button>
        </div>
      </div>
    </section>
  )
}
