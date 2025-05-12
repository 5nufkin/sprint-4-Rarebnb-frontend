import { userService } from '../services/user'
import { StayPreview } from './StayPreview'

export function StayList({ stays}) {

  console.log(stays)


  return <section>
    <ul className="list">
      {stays.map(stay =>
        <li key={stay._id}>
          <StayPreview stay={stay} />
        </li>)
      }
    </ul>
  </section>
}