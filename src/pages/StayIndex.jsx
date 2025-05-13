import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStays, addStay, updateStay, removeStay, addStayMsg } from '../store/actions/stay.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay/'
import { StayList } from '../cmps/StayList'
import { StayFilter } from '../cmps/StayFilter'
import { StayIconFilter } from '../cmps/StayIconFilter'
import { StayFilterMinimized } from '../cmps/StayFilterMinimized'
import { StayFilterExpanded } from '../cmps/StayDetails/StayFilterExpanded'

export function StayIndex() {
  const stays = useSelector(storeState => storeState.stayModule.stays)
  const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())

  useEffect(() => {
    loadStays(filterBy)
  }, [filterBy])

  async function onRemoveStay(stayId) {
    try {
      await removeStay(stayId)
      showSuccessMsg('Stay removed')
    } catch (err) {
      showErrorMsg('Cannot remove stay')
    }
  }

  async function onAddStay() {
    const stay = stayService.getEmptyStay()
    stay.name = prompt('Name?', 'Some Name')
    try {
      const savedStay = await addStay(stay)
      showSuccessMsg(`Stay added (id: ${savedStay._id})`)
    } catch (err) {
      showErrorMsg('Cannot add stay')
    }
  }

  async function onUpdateStay(stay) {
    const price = +prompt('New price?', stay.price) || 0
    if (price === 0 || price === stay.price) return

    const stayToSave = { ...stay, price }
    try {
      const savedStay = await updateStay(stayToSave)
      showSuccessMsg(`Stay updated, new price: ${savedStay.price}`)
    } catch (err) {
      showErrorMsg('Cannot update stay')
    }
  }

  return (
    <main className="stay-index">
      <StayFilterExpanded filterBy={filterBy} setFilterBy={setFilterBy} />
<StayIconFilter />
      <StayList stays={stays} onUpdateStay={onUpdateStay} />
    </main>
  )
}