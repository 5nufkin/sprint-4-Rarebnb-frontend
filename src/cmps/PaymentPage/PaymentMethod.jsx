import { VISAicon } from "../Icons";

export function PaymentMethod({ cardType = "visa", last4 = "1234", onChange }) {
  return (
    <section className="payment-method-box">
      <h3 className="section-title">Payment method</h3>
      <div className="payment-method-card">
        <div className="card-display">
          <VISAicon />
          <span className="card-last4">{last4}</span>
        </div>

        <div className="change-btn-wrapper">
          <button className="btn-change" onClick={onChange}>Change</button>
        </div>
      </div>
    </section>
  )
}
