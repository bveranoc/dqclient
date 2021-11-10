import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { HOME } from '../../routes'

// Context
import AuthContext from '../../store/context/authentication/authContext'

const Navbar = () => {
  const history = useHistory()
  const location = useLocation()

  const authContext = useContext(AuthContext)
  const { auth, logout } = authContext

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
          className="underline font-neue font-medium text-dq-dark-gray text-lg md:text-2xl"
          onClick={goBack}
        >
          Volver
        </button>
      )}

      {auth && (
        <button
          onClick={logout}
          className="underline font-neue font-medium text-dq-dark-gray text-lg md:text-2xl"
        >
          Salir
        </button>
      )}
    </header>
  )
}

export default Navbar
