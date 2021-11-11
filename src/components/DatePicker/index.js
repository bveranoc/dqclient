import React, { useState } from 'react'

// Third-Party Components
import ReactDatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Icons
import DownArrowIcon from '../../icons/DownArrowIcon'

// Styles
import './styles.css'

// Internationalization
import es from 'date-fns/locale/es'
import { useEffect } from 'react/cjs/react.development'
registerLocale('es', es)

const DatePicker = ({ homeData, setHomeData }) => {
  const today = new Date()

  const [startDate, setStartDate] = useState(today)
  const [isOpen, setIsOpen] = useState(false)
  const handleChange = (e) => {
    setIsOpen(!isOpen)
    setStartDate(e)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    let day = ('0' + startDate.getDate()).slice(-2)
    let month = ('0' + (startDate.getMonth() + 1)).slice(-2)
    let year = startDate.getFullYear()

    setHomeData({
      ...homeData,
      sendingDate: `${year}-${month}-${day}`,
    }) //eslint-disable-next-line
  }, [startDate])

  return (
    <>
      <button
        className="border-2 border-black py-2 px-1"
        type="button"
        onClick={handleClick}
      >
        <DownArrowIcon />
      </button>
      {isOpen && (
        <ReactDatePicker
          selected={startDate}
          onChange={handleChange}
          minDate={today}
          inline
          locale="es"
        />
      )}
    </>
  )
}

export default DatePicker
