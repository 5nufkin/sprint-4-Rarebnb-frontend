// src/cmps/StayDetails/AmenitiesGrid.jsx
import { amenityIcons } from './amenity-icons.js'

export function AmenitiesGrid({ amenities = [] }) {
  return (
    <section>
      <h2>Amenities</h2>

      <ul className="amenities-grid">
        {amenities.map(name => {
          const Icon = amenityIcons[name]
          return (
            <li key={name}>
              {Icon && <Icon className="amenity-icn" size={20} />}
              <span>{name}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
