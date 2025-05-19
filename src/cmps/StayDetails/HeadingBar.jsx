import { IoMdStar } from "react-icons/io";
export function HeadingBar({ stay }) {
  return (
    <header className="heading-bar">
      <section className="asset-details">
      <h1>{stay.name}</h1>
      <span>{stay.capacity} guests · 1 bedroom · {stay.bedCount} bed · 1 bath</span>
      <div className="meta">
        <span>
          <IoMdStar size={12} />
          {stay.avgRating ?? 4.88}  · 
          </span>
        <span className="rating"> {stay.reviews?.length ?? 0} reviews</span>
      </div>
      </section>
    </header>
  )
}
