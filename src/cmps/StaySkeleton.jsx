export function StayDetailsSkeleton() {
  return (
    <section className="stay-details-skeleton">
      <div className="img-grid">
        <div className="img main"></div>
        <div className="img sub1"></div>
        <div className="img sub2"></div>
        <div className="img sub3"></div>
        <div className="img sub4"></div>
      </div>

      <div className="desc-placeholder medium"></div>
      <div className="desc-placeholder medium"></div>
      <div className="desc-placeholder short"></div>
    </section>
  )
}

export function StaySkeleton() {
  return (
    <div className="stay-card skeleton">
      <div className="img-placeholder"></div>
      <div className="first-line">
        <div className="row line medium"></div>
        <div className="row line short"></div>
      </div>
      <div className="row line long"></div>
      <div className="row line short"></div>
      <div className="row line short"></div>
    </div>
  )
}

export function StaySkeletonIconFilter() {
  return (
    <div className="stay-card skeleton icon-skeleton">
      <div className="img-placeholder"></div>
      <div className="row line medium"></div>
    </div>
  )
}

export function PaymentPageSkeleton() {
  return (
    <section className="payment-page-skeleton main-payment-grid">
      {/* LEFT SIDE */}
      <div className="payment-left">
        {/* Payment Method */}
        <div className="skeleton card-skeleton payment-method-skeleton">
          <div className="line short"></div>
          <div className="line medium"></div>
        </div>

        {/* Message to host */}
        <div className="skeleton card-skeleton message-to-host-skeleton">
          <div className="line short"></div>
          <div className="line long"></div>
          <div className="textarea-skeleton"></div>
        </div>

        {/* Info text */}
        <div className="line text-skeleton"></div>

        {/* Button */}
        <div className="skeleton btn-skeleton"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="booking-summary-wrapper">
        <div className="skeleton card-skeleton booking-summary-skeleton large-skeleton">
          <div className="img-placeholder small"></div>
          <div className="line medium"></div>
          <div className="line short"></div>
          <div className="line long"></div>
          <div className="line medium"></div>
          <div className="line short"></div>
          <div className="line medium"></div>
          <div className="line short"></div>
        </div>
      {/* Rare find */}
      <div className="rare-find-skeleton skeleton">
        <div className="icon-placeholder"></div>
        <div className="line short"></div>
        <div className="line xshort"></div>
      </div>
      </div>

    </section>
  )
}

export function StaySkeletonIconRow() {
  return (
    <div className="stay-skeleton-row">
      {Array.from({ length: 10 }).map((_, idx) => (
        <StaySkeletonIconFilter key={idx} />
      ))}
    </div>
  )
}
