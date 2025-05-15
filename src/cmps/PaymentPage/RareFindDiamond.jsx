import { DiamondIcon } from "../Icons";

export function RareFindDiamond() {
  return (
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
  )
}
