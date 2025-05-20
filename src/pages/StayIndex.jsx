import { useSelector } from "react-redux"
import { addStay, updateStay, removeStay } from "../store/actions/stay.actions"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service"
import { stayService } from "../services/stay/"
import { StayList } from "../cmps/StayList"
import { StayIconFilter } from "../cmps/StayIconFilter"

import { StaySkeleton, StaySkeletonIconRow } from "../cmps/StaySkeleton"

export function StayIndex() {
  const stays = useSelector((storeState) => storeState.stayModule.stays)

  const isLoading = useSelector(
    (storeState) => storeState.systemModule.isLoading
  )

  async function onRemoveStay(stayId) {
    try {
      await removeStay(stayId)
      showSuccessMsg("Stay removed")
    } catch (err) {
      showErrorMsg("Cannot remove stay")
    }
  }

  async function onAddStay() {
    const stay = stayService.getEmptyStay()
    stay.name = prompt("Name?", "Some Name")
    try {
      const savedStay = await addStay(stay)
      showSuccessMsg(`Stay added (id: ${savedStay._id})`)
    } catch (err) {
      showErrorMsg("Cannot add stay")
    }
  }

  async function onUpdateStay(stay) {
    const price = +prompt("New price?", stay.price) || 0
    if (price === 0 || price === stay.price) return

    const stayToSave = { ...stay, price }
    try {
      const savedStay = await updateStay(stayToSave)
      showSuccessMsg(`Stay updated, new price: ${savedStay.price}`)
    } catch (err) {
      showErrorMsg("Cannot update stay")
    }
  }


  return (
    <section className="stay-index main-layout">
      {isLoading ? (
        <>
          <div className="stay-filter-icon-skeleton">
            <StaySkeletonIconRow />
          </div>

          <div className="stay-list grid">
            {Array.from({ length:13 }).map((_, idx) => (
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

  // return (
  //   <section className="stay-index">
  //     {isLoading ? (
  //       <>
  //         <div className="stay-filter-skeleton">
  //           <StaySkeletonIconRow />
  //         </div>

  //         <div className="stay-list grid">
  //           {Array.from({ length: 13 }).map((_, idx) => (
  //             <StaySkeleton key={idx} />
  //           ))}
  //         </div>
  //       </>
  //     ) : (
  //       <>
  //         <StayIconFilter />
  //         <StayList stays={stays} />
  //       </>
  //     )}
  //   </section>
  // )
}
