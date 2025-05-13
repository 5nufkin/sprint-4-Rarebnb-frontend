import { useState } from "react"
import { DatePicker } from "../DatePicker"
import { GuestPicker } from "../GuestPicker"
import { Popover } from "../Popover"


export function StayFilterExpanded({ filterBy, setFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  const [openSection, setOpenSection] = useState('')



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
    console.log(guests)
    setFilterByToEdit(prev => ({ ...prev, ...guests }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    setFilterBy({ ...filterByToEdit })
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }


  const { country, checkIn, checkOut, adults, children, infants, pets } = filterByToEdit
  const totalGuests = adults + children + infants + pets

  return (
    <section className="filter-bar">
      <button onClick={() => setOpenSection('location')}>
        <div className="btn-content">
          <label htmlFor="country">Where </label>
          <input value={country} onChange={handleChange}
            type="text" placeholder="Search destinations" id="country" name="country" />
        </div>
      </button>
      <button onClick={() => setOpenSection('dates')}>
        {checkIn ? formatDate(checkIn) : 'Check in'}
      </button>
      <button onClick={() => setOpenSection('dates')}>
        {checkOut ? formatDate(checkOut) : 'Check out'}
      </button>
      <button onClick={() => setOpenSection('guests')}>
        {totalGuests > 0 ? `${totalGuests} guests` : 'Who'}
      </button>
      <button onClick={handleSubmit}>🔍 Search</button>
      {openSection === 'dates' && (
        <Popover>
          <DatePicker onSetDates={handleDateChange} />
        </Popover>
      )}
      {/* {openSection === 'location' && (
        <Popover>
          <label htmlFor="country">Where </label>
          <input value={country} onChange={handleChange}
            type="text" placeholder="Search destinations" id="country" name="country" />
        </Popover>
      )} */}
      {openSection === 'guests' && (
        <Popover style={{ right: 0 }}>
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



{/* <form onSubmit={handleSubmit}>
  <label htmlFor="country">Where </label>
  <input value={country} onChange={handleChange}
    type="text" placeholder="Search destinations" id="country" name="country" />
  <DatePicker onSetDates={handleDateChange} />
  <GuestPicker
    onSetGuests={onSetGuests}
    guests={{ adults, children, infants, pets }}
  />
  <button>Search</button>
</form> */}