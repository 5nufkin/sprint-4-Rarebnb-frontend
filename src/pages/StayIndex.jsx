import { useSelector } from "react-redux"
import { StayList } from "../cmps/StayList"
import { StayIconFilter } from "../cmps/StayIconFilter"

import { StaySkeleton, StaySkeletonIconRow } from "../cmps/StaySkeleton"

export function StayIndex() {
  const stays = useSelector((storeState) => storeState.stayModule.stays)
  const isLoading = useSelector((storeState) => storeState.systemModule.isLoading)

  return (
    <section className="stay-index main-layout">
      {isLoading ? (
        <>
          <div className="stay-filter-icon-skeleton">
            <StaySkeletonIconRow />
          </div>

          <div className="stay-list grid">
            {Array.from({ length: 13 }).map((_, idx) => (
              <StaySkeleton key={idx} />
            ))}
          </div>
        </>
      ) : (
        <>
          <StayIconFilter />
          <StayList stays={stays} />
        </>
      )}
    </section>
  )
}
