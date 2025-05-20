import { IoMdStar } from "react-icons/io";

export function HeadingBar({ stay }) {

  const rating  = stay.avgRating ?? 4.88;
  const reviews = stay.reviews?.length ?? 0;

  return (
    <header className="heading-bar">
      <section className="asset-details">
        <h1 className="stay-type">
          {stay.type} in {stay.loc.city}, {stay.loc.country}
        </h1>
        
        <p className="stay-info">
          {stay.capacity} guests · 1 bedroom · {stay.bedCount} bed · 1 bath
        </p>

        <p className="rating-line">
          <IoMdStar className="star" />
          {rating.toFixed(2)} ·{" "}
          <a href="#reviews" className="reviews-link">
            {reviews} reviews
          </a>
        </p>
      </section>
    </header>
  );
}
