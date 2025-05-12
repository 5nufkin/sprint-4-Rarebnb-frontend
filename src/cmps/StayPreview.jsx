import { Link } from 'react-router-dom'
import { stayService } from '../services/stay'
import { HeartIcon, StarIcon } from './Icons'

export function StayPreview({ stay }) {


  return (
    <article className="stay-preview">
      <Link to={`/stay/${stay._id}`}>
        <section className="preview-img">
          <img src={stay.imgUrls[0]} alt={stay.name} />
        </section>
        <button className='btn-like'><HeartIcon className="icon-like" /></button>
        <section className="preview-details">
          <h2 className='header bold'>{stayService.getStayAddressStr(stay)}</h2>
          <p className='avgRating'>{<StarIcon />}{stay.avgRating}</p>
          <p className='summary regular'>{stay.summary}</p>
          <p className='bed-count regular'>{stay.bedCount} bed{stay.bedCount === 1 ? '' : 's'}</p>
          <p className='price regular'><span className='bold'>${stay.price.toLocaleString()}</span> night</p>
        </section>
      </Link>
    </article>
  )
}