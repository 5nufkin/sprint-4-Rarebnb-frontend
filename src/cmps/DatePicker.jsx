import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'

export function DatePicker({ onSetDates }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])

  const handleSelect = (item) => {
    const selected = item.selection
    console.log(item.selection)
    setRange([selected])
    onSetDates({
      checkIn: selected.startDate,
      checkOut: selected.endDate
    })
  }

  return (
    <DateRange
      editableDateInputs={true}
      onChange={handleSelect}
      moveRangeOnFirstSelection={false}
      ranges={range}
      months={2}
      direction="horizontal"
    />
  )
}