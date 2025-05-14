import { getDateTxt } from "../services/util.service"


export function StayFilterMinimized({ filterBy }) {
  console.log(filterBy)

  const { city, country, checkIn, checkOut, guestTotal } = filterBy
  console.log(city, country)

  return (
    <section className="filter-minimized">
      <button>
        <section className="location">
          {city || country
            ? <p>Homes in {city || country}</p>
            : <p>Anywhere</p>
          }
        </section>
        <section className="dates">
          {checkIn && checkOut
            ? <p>{getDateTxt(checkIn, checkOut)}</p>
            : <p>Anytime</p>
          }
        </section>
        <section className="guests">
          {guestTotal > 0
            ? <p>{guestTotal} guest{guestTotal > 1 ? 's' : ''}</p>
            : <p>Add guests</p>
          }
        </section>
      </button>
    </section>
  )
}