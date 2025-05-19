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


export function StaySkeletonIconRow() {
  return (
    <div className="stay-skeleton-row">
      {Array.from({ length: 13 }).map((_, idx) => (
        <StaySkeletonIconFilter key={idx} />
      ))}
    </div>
  )
}
