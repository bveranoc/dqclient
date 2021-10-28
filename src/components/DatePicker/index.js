import React, { useState } from 'react'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './styles.css'

const DatePicker = () => {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [startDate, setStartDate] = useState(tomorrow)
  const [isOpen, setIsOpen] = useState(false)
  const handleChange = (e) => {
    setIsOpen(!isOpen)
    setStartDate(e)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="border-2 border-black py-2 px-1"
        type="button"
        onClick={handleClick}
      >
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0 9.178 9.689L18.356 0z" fill="#000" fillRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <ReactDatePicker
          selected={startDate}
          onChange={handleChange}
          minDate={tomorrow}
          inline
        />
      )}
    </>
  )
}

export default DatePicker
