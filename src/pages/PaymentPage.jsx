import { BookingSummary } from "../cmps/PaymentPage/BookingSummary"
import { MessageToHost } from "../cmps/PaymentPage/MessageToHost"
import { PaymentMethod } from "../cmps/PaymentPage/PaymentMethod"

export function PaymentPage() {
  return (
    <section className="payment-page">
      <h1 className="back-to-detail">Request to book</h1>
      <div className="payment-container">
        {/* ===== Left Side ===== */}
        <div className="payment-left">
          <PaymentMethod />
          <MessageToHost />
        </div>
        {<BookingSummary />}
      </div>
    </section>
  )
}
