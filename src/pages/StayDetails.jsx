import { HeroGallery } from '../cmps/StayDetails/HeroGallery.jsx'
import { HeadingBar } from '../cmps/StayDetails/HeadingBar.jsx'
import { Highlights } from '../cmps/StayDetails/Highlights.jsx'
import { AmenitiesGrid } from '../cmps/StayDetails/AmenitiesGrid.jsx'
import { SleepingRooms } from '../cmps/StayDetails/SleepingRooms.jsx'
import { ReviewsSection } from '../cmps/StayDetails/ReviewsSection.jsx'
import { LocationMap } from '../cmps/StayDetails/LocationMap.jsx'
import { HostCard } from '../cmps/StayDetails/HostCard.jsx'
import { BookingWidget } from '../cmps/StayDetails/BookingWidget.jsx'
import { AssetTitle } from '../cmps/StayDetails/AssetTitle.jsx'
import { HostSummary } from '../cmps/StayDetails/HostSummary.jsx'
import '../assets/styles/pages/StayDetails.scss'

import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { stayService } from '../services/stay/index.js'
import { setEmptyOrderToSave } from '../store/actions/order.actions.js'
import { useSelector } from 'react-redux'
import { StayDetailsSkeleton } from '../cmps/StaySkeleton.jsx'


export function StayDetails() {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()
  const orderToSave = useSelector(storeState => storeState.orderModule.orderToSave)
  stay.host.avgRating  = stay.avgRating
  stay.host.reviews    = stay.reviews

  useEffect(() => {
    async function loadStay() {
      try {
        const stay = await stayService.getById(stayId)
        setStay(stay)

        try {
          setEmptyOrderToSave(stay)
        } catch (err) {
          console.error('Error setting empty order:', err)
        }

      } catch (err) {
        console.error('Error fetching stay:', err)
      }
    }
    loadStay()
  }, [stayId])

  useEffect(() => {
    stayService.getById(stayId).then(setStay)
  }, [stayId])

  if (!stay) return <StayDetailsSkeleton />

  const demoHighlights = [
    'Your very own island',
    'Beachfront and garden views',
    'In-home washer'
  ]
  const demoRooms = stay?.imgUrls?.length > 2 ? [
    { type: 'Bedroom 1', beds: ['King'], imgUrl: stay.imgUrls[1] },
    { type: 'Bedroom 2', beds: ['Queen'], imgUrl: stay.imgUrls[2] },
  ] : []

  return (
    <main className="stay-details">

      <div className="page-container">
        <div className="scroll-area">
        <AssetTitle title={stay.name} />
          <HeroGallery images={stay.imgUrls} />
          <HeadingBar stay={stay} />
          <div className="main-grid">
            <div className="left-col">

              <div className="section-divider" />
              <HostSummary host={stay.host} />

              <div className="section-divider" />
              <Highlights />
              <div className="section-divider" />

              <section><p className='stay-description'>{stay.summary}</p></section>
              <div className="section-divider" />

              <AmenitiesGrid amenities={stay.amenities} />
              
              <div className="section-divider" />
              <SleepingRooms rooms={demoRooms} />
            </div>

            <aside className="booking-col">
              <BookingWidget stay={stay} />
            </aside>

          </div>
        </div>
              <ReviewsSection stay={stay} />
              <div className="section-divider" />
              <LocationMap location={stay.loc} />
              <HostCard host={stay.host} />
              <div className="section-divider" />
      </div>
    </main>
  )
}
