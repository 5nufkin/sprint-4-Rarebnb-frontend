import { useState } from 'react'
import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

export function MyDatePicker({ onSetDates }) {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  const handleChange = (update) => {
    setDateRange(update)
    onSetDates({ checkIn: update[0], checkOut: update[1] })
  }

  return (
    <section className="date-picker">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        inline
        formatWeekDay={(nameOfDay) => nameOfDay.charAt(0)}
        minDate={new Date()}
      />
    </section>
  )
}