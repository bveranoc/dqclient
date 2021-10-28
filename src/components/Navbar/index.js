import React from 'react'
import { useLocation } from 'react-router-dom'

import { HOME, DISPLAY_MESSAGE } from '../../routes'

const Navbar = ({ setIsBgWhite }) => {
  const location = useLocation()
  if (location.pathname === HOME || location.pathname === DISPLAY_MESSAGE) {
    setIsBgWhite(true)
  }

  return (
    <header className="py-10 text-right">
      <button className="underline font-neue font-medium text-dq-dark-gray text-2xl">
        Salir
      </button>
    </header>
  )
}

export default Navbar
