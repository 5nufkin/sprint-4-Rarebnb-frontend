import { VISAicon } from "../Icons"

export function PaymentMethod({ cardType = "visa", last4 = "1234", onChange }) {
  return (
    <section className="payment-method-box">
      <div className="payment-method-header">
        <h3 className="section-title">Payment method</h3>
        <button className="btn-change" onClick={onChange}>Change</button>
      </div>

      <div className="card-display">
        <VISAicon />
        <span className="card-last4">{last4}</span>
      </div>
    </section>
  )
}
