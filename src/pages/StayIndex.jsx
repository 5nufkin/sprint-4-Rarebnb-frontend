import { useSelector } from "react-redux"
// import { addStay, updateStay, removeStay } from "../store/actions/stay.actions"
// import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"
// import { stayService } from "../services/stay/"
import { StayList } from "../cmps/StayList"
import { StayIconFilter } from "../cmps/StayIconFilter"

import { StaySkeleton, StaySkeletonIconRow } from "../cmps/StaySkeleton"
import { useSearchParams } from "react-router-dom"
import { LeftArrow, RightArrow } from "../cmps/Icons"
import { useEffect, useState } from "react"

export function StayIndex() {
  const stays = useSelector((storeState) => storeState.stayModule.stays)
  const totalPages = useSelector(store => store.stayModule.totalPages)
  const isLoading = useSelector((storeState) => storeState.systemModule.isLoading)
  const [searchParams, setSearchParams] = useSearchParams()
  const pageIdx = +searchParams.get('pageIdx' || 0)

  function handlePageChange(diff) {
    const nextPage = pageIdx + diff
    if (nextPage < 0) return
    searchParams.set('pageIdx', nextPage)
    setSearchParams(searchParams)
  }

  return (
    <section className="stay-index main-layout">
      {isFirstLoad ? (
        <div className="stay-filter-icon-skeleton">
          <StaySkeletonIconRow />
        </div>
      ) : (
        <StayIconFilter />
      )}

      {isLoading ? (
        <div className="stay-list grid">
          {Array.from({ length: 12 }).map((_, idx) => (
            <StaySkeleton key={idx} />
          ))}
        </div>
      ) : (

          <section className="pagination-controls flex justify-end">
            <button onClick={() => handlePageChange(-1)} disabled={pageIdx === 0}><LeftArrow /></button>
            <button onClick={() => handlePageChange(1)} disabled={pageIdx === totalPages - 1}><RightArrow /></button>
          </section>

        <StayList stays={stays} />
      )}
    </section>
  )
}
