import { IoStar, IoLanguageOutline, IoTimer } from 'react-icons/io5'
import { HiShieldCheck }    from 'react-icons/hi2'
import { MdWork, MdChat }   from 'react-icons/md'
import { LuShieldCheck } from "react-icons/lu";

export function HostCard({ host }) {
  if (!host) return null
  const rating        = host.avgRating ??
      (host.reviews.reduce((s,r)=>s+r.rate,0) / host.reviews.length).toFixed(2)
  const reviewsCount  = host.reviews.length

  return (
    <section className="host-card">
     
      <div className="host-main">
        <img className="avatar" src={host.imgUrl} alt={host.fullname} />

        <div className="host-main__txt">
          <h2 className="name">{host.fullname}</h2>

          <div className="badges">
            {host.isSuperhost && (
              <span className="badge">
                <HiShieldCheck size={14} />
                Superhost
              </span>
            )}
            <span className="badge">
              <IoStar size={14} />
              {host.reviews?.length ?? 0} reviews
            </span>
          </div>

          <ul className="stats">
            <li>
              <strong>{reviewsCount ?? 0}</strong>
              <span>Reviews</span>
            </li>
            <li>
              <strong>{rating ?? 4.9}</strong>
              <span>Rating</span>
            </li>
            <li>
              <strong>{host.yearsHosting ?? 4}</strong>
              <span>Years hosting</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="host-extra">
        <p className="superhost-desc">
          {host.fullname} is&nbsp;
          {host.isSuperhost ? 'a Superhost.' : 'your host.'}
          &nbsp;Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
        </p>

        <ul className="details-list">
          <li>
            <MdWork size={18} />
            <span>My work: {host.work ?? 'Rarebnb Host'}</span>
          </li>
          <li>
            <IoLanguageOutline size={18} />
            <span>Speaks {host.languages ?? 'English, Hebrew'}</span>
          </li>
          <li>
            <MdChat size={18} />
            <span>Response rate: <b>{host.responseRate ?? '100%'}</b></span>
          </li>
          <li>
            <IoTimer size={18} />
            <span>Response time: <b>{host.responseTime ?? 'within a day'}</b></span>
          </li>
        </ul>

        <p className="disclaimer">
          <LuShieldCheck size={22}/>
          To help protect your payment, always use Rarebnb to send money and communicate with hosts.
        </p>
      </div>
    </section>
  )
}
