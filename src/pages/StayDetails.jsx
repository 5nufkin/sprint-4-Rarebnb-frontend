import { HeroGallery } from '../cmps/StayDetails/HeroGallery.jsx'
import { HeadingBar } from '../cmps/StayDetails/HeadingBar.jsx'
import { Highlights } from '../cmps/StayDetails/Highlights.jsx'
import { AmenitiesGrid } from '../cmps/StayDetails/AmenitiesGrid.jsx'
import { SleepingRooms } from '../cmps/StayDetails/SleepingRooms.jsx'
import { ReviewsSection } from '../cmps/StayDetails/ReviewsSection.jsx'
import { LocationMap } from '../cmps/StayDetails/LocationMap.jsx'
import { HostCard } from '../cmps/StayDetails/HostCard.jsx'
import { BookingWidget } from '../cmps/StayDetails/BookingWidget.jsx'
import '../assets/styles/pages/StayDetails.scss'

import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { stayService } from '../services/stay/index.js'
import { StayDetailsSkeleton } from '../cmps/StaySkeleton.jsx'


export function StayDetails() {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()

  useEffect(() => {
    async function  loadStay() {
      try {
        const stay = await stayService.getById(stayId)        
        setStay(stay)
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

        <HeroGallery images={stay.imgUrls} />
        <HeadingBar stay={stay} />

          <div className="main-grid">
            <div className="left-col">
              <Highlights highlights={demoHighlights} />
              <div className="section-divider" />

              <section><h2>About this space</h2><p>{stay.summary}</p></section>

              <SleepingRooms rooms={demoRooms} />
              <AmenitiesGrid amenities={stay.amenities} />
            </div>

            <aside className="booking-col">
                <BookingWidget stay={stay} />
            </aside>
            
          </div>
        </div>
              <ReviewsSection stay={stay} />
              <LocationMap location={stay.loc} />
              <HostCard host={stay.host} />
              <div className="section-divider" />
      </div>
    </main>
  )
}
