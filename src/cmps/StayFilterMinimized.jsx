import { useState } from "react"


export function StayFilterMinimized({ filterBy, setFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value || '' : value
    if (field === 'inStock') {
      if (!value) value = null
      else value = value === 'true' ? true : false
    }
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
  }

  return (
    <section className="filter-minimized">
      <form>
        <label htmlFor="country">Where </label>
        <input  onChange={handleChange}
          type="text" placeholder="Search destinations" id="minPrice" name="minPrice" />
      </form>
    </section>
  )
}