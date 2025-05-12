import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Store actions & helpers
import { loadStay, addStayMsg } from '../store/actions/stay.actions.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'


export function StayDetails() {
  const { stayId } = useParams()
  const dispatch = useDispatch()

  const { stay, isLoading, error } = useSelector(state => state.stayModule)

  useEffect(() => {
    dispatch(loadStay(stayId))
  }, [stayId, dispatch])

  async function handleAddStayMsg() {
    if (!stay?._id) return
    try {
      await dispatch(addStayMsg(stay._id, `From UI – ${Date.now()}`))
      showSuccessMsg('Message added!')
    } catch (err) {
      showErrorMsg('Cannot add stay message')
    }
  }

  return (
    <main className="stay-details max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link to="/stay" className="text-sm text-gray-600 hover:underline">← Back to results</Link>

    </main>
  )
}
