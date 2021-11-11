import React, { useState, useContext, useEffect } from 'react'

import AdminContext from '../store/context/admin/adminContext'

import { ADMIN_DASHBOARD } from '../routes'

const AdminLoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const adminContext = useContext(AdminContext)
  const { authAdmin, errorMessage, auth } = adminContext

  useEffect(() => {
    console.log(auth)
    if (auth) {
      props.history.push(ADMIN_DASHBOARD)
    }
    //eslint-disable-next-line
  }, [auth])

  const onSubmit = (e) => {
    e.preventDefault()
    authAdmin(username, password)
  }

  return (
    <div className="flex h-screen">
      <form
        className="m-auto w-full md:w-1/2 lg:w-1/3 text-center px-2"
        onSubmit={onSubmit}
      >
        <h1 className="text-3xl font-bold mb-5">Inicia Sesión</h1>
        <div className="my-2">
          <input
            className="border-2 rounded-md w-full px-2 py-2"
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="my-2">
          <input
            className="border-2 rounded-md w-full px-2 py-2"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-4">
          <button className="w-full border-2 rounded-md px-2 py-2 bg-black text-white">
            Ingresar
          </button>
          <span className="text-red-700">{errorMessage}</span>
        </div>
      </form>
    </div>
  )
}

export default AdminLoginPage
