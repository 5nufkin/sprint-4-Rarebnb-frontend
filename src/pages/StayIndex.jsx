import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStays, addStay, updateStay, removeStay, addStayMsg } from '../store/actions/Stay.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { StayService } from '../services/Stay/'
import { userService } from '../services/user'

import { StayList } from '../cmps/StayList'
import { StayFilter } from '../cmps/StayFilter'

export function StayIndex() {

    const [ filterBy, setFilterBy ] = useState(StayService.getDefaultFilter())
    const Stays = useSelector(storeState => storeState.StayModule.Stays)

    useEffect(() => {
        loadStays(filterBy)
    }, [filterBy])

    async function onRemoveStay(StayId) {
        try {
            await removeStay(StayId)
            showSuccessMsg('Stay removed')            
        } catch (err) {
            showErrorMsg('Cannot remove Stay')
        }
    }

    async function onAddStay() {
        const Stay = StayService.getEmptyStay()
        Stay.name = prompt('name?', 'Some name')
        try {
            const savedStay = await addStay(Stay)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`)
        } catch (err) {
            showErrorMsg('Cannot add Stay')
        }        
    }

    async function onUpdateStay(Stay) {
        const price = +prompt('New price?', Stay.price) || 0
        if(price === 0 || price === Stay.price) return

        const StayToSave = { ...Stay, price: price }
        try {
            const savedStay = await updateStay(StayToSave)
            showSuccessMsg(`Stay updated, new price: ${savedStay.price}`)
        } catch (err) {
            showErrorMsg('Cannot update Stay')
        }        
    }

    return (
        <main className="Stay-index">
            <header>
                <h2>Stays</h2>
                {userService.getLoggedinUser() && <button onClick={onAddStay}>Add a Stay</button>}
            </header>
            <StayFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <StayList 
                Stays={Stays}
                onRemoveStay={onRemoveStay} 
                onUpdateStay={onUpdateStay}/>
        </main>
    )
}