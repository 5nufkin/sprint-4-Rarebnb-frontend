import { IoMdStar } from "react-icons/io";
export function HeadingBar({ stay }) {
  return (
    <header className="heading-bar">
      <h1>{stay.name}</h1>
      <div className="meta">
        <span>
          <IoMdStar size={12} />
          {stay.avgRating ?? 4.88}  · 
          </span>
        <span className="rating"> {stay.reviews?.length ?? 0} reviews</span>
      </div>
    </header>
  )
}
