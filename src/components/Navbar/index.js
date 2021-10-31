import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { HOME } from '../../routes'

const Navbar = () => {
  const history = useHistory()
  const location = useLocation()

  const isHome = location.pathname === HOME

  const goBack = () => {
    history.goBack()
  }

  return (
    <header
      className={`py-10 text-right ${!isHome ? 'flex justify-between' : ''}`}
    >
      {!isHome && (
        <button
          className="underline font-neue font-medium text-dq-dark-gray text-2xl"
          onClick={goBack}
        >
          Volver
        </button>
      )}

      <button className="underline font-neue font-medium text-dq-dark-gray text-2xl">
        Salir
      </button>
    </header>
  )
}

export default Navbar
