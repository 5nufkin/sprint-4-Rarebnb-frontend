import { useEffect, useRef, useState } from "react"
import { GuestPicker } from "./GuestPicker"
import { Popover } from "./Popover"
import { MagnifyingGlassIcon } from "./Icons"
import { MyDatePicker } from "./MyDatePicker"
import { formatDate } from "../services/util.service"


export function StayFilterExpanded({ filterBy, setFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  const [activeSection, setActiveSection] = useState('')
  const isFocused = !!activeSection
  const filterBarRef = useRef()

  useEffect(() => {
    function handleClickOutside(ev) {
      if (filterBarRef.current && !filterBarRef.current.contains(ev.target)) {
        ev.preventDefault()
        ev.stopPropagation()
        setActiveSection('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  }, [])


  function handleChange({ target }) {
    let { value, name: field, type } = target

    value = type === 'number' ? +value || '' : value
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }

  function handleDateChange({ checkIn, checkOut }) {
    setFilterByToEdit(prev => ({
      ...prev,
      checkIn,
      checkOut
    }))
  }

  function onSetGuests(guests) {
    setFilterByToEdit(prev => ({ ...prev, ...guests }))
  }

  function handleSearch(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    setFilterBy({ ...filterByToEdit })
  }

  const { country, checkIn, checkOut, adults, children, infants, pets } = filterByToEdit
  const totalGuests = adults + children + infants + pets

  return (
    <section ref={filterBarRef} className={`filter-bar ${isFocused ? 'focused' : ''}`}>
      <button
        className={`btn-location ${activeSection === 'location' ? 'active' : ''}`}
        onClick={() => setActiveSection('location')}
      >
        <div className="btn-content">
          <label htmlFor="country" className="btn-label">Where </label>
          <input value={country} onChange={handleChange}
            type="text" placeholder="Search destinations" id="country" name="country" />
        </div>
      </button>

      <div className="btn-dates">

        <button
          className={`btn-check-in ${activeSection === 'check-in' ? 'active' : ''}`}
          onClick={() => setActiveSection('check-in')}
        >
          <div className="btn-content">
            <span className="btn-label">Check in</span>
            <span className="btn-value">{checkIn ? formatDate(checkIn) : 'Add dates'}</span>
          </div>
        </button>

        <button
          className={`btn-check-out ${activeSection === 'check-out' ? 'active' : ''}`}
          onClick={() => setActiveSection('check-out')}
        >
          <div className="btn-content">
            <span className="btn-label">Check out</span>
            <span className="btn-value">{checkOut ? formatDate(checkOut) : 'Add dates'}</span>
          </div>
        </button>

      </div>

      <button className="btn-guests" onClick={() => setActiveSection('guests')}>
        <div className="btn-content">
          <span className="btn-label">Who</span>
          <span className="btn-value">
            {totalGuests > 0 ? `${totalGuests} guests` : 'Add guests'}
          </span>
        </div>
        <span className="search-icon" onClick={handleSearch}><MagnifyingGlassIcon /></span>
      </button>

      {
        (activeSection === 'check-in' || activeSection === 'check-out') && (
          <Popover style={{ left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
            <MyDatePicker
              onSetDates={handleDateChange}
              setActiveSection={setActiveSection}
              markedDates={[filterByToEdit.checkIn, filterByToEdit.checkOut]}
            />
          </Popover>
        )
      }

      {
        activeSection === 'guests' && (
          <Popover style={{ right: 0, width: '50%' }}>
            <GuestPicker
              onSetGuests={onSetGuests}
              guests={{ adults, children, infants, pets }}
            />
          </Popover>
        )
      }
    </section >
  )
}