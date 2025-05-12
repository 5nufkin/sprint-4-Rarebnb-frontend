export function HeadingBar({ stay }) {
  return (
    <header className="heading-bar">
      <h1>{stay.name}</h1>
      <div className="meta">
        <span>⭐ {stay.rating ?? 4.88}</span>
        <span> · {stay.reviews?.length ?? 0} reviews</span>
        <button className="icon-btn">Share</button>
        <button className="icon-btn">Save</button>
      </div>
    </header>
  )
}
