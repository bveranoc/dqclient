import React, { useContext, useEffect } from 'react'

import AdminContext from '../store/context/admin/adminContext'
import { ADMIN_AUTH } from '../routes'

const AdminLoginPage = (props) => {
  const adminContext = useContext(AdminContext)
  const { logout, pendingMessages, getPendingMessages, sendMessages, loading } =
    adminContext

  const onLogout = () => {
    logout()
    props.history.push(ADMIN_AUTH)
  }

  const onClick = () => {
    async function send() {
      await sendMessages()
      await getPendingMessages()
    }

    const confirmation = window.confirm(
      `¿Deseas enviar ${pendingMessages} correos?`
    )
    if (confirmation) {
      send()
    }
  }

  useEffect(() => {
    getPendingMessages()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <header className="bg-black text-white text-right px-3 py-5 lg:px-5">
        <button className="underline" onClick={onLogout}>
          Salir
        </button>
      </header>
      <main className="flex h-screen">
        <div className="m-auto">
          <button
            onClick={onClick}
            className="w-full border-2 rounded-md px-2 py-2 bg-black text-white hover:bg-gray-600"
          >
            {loading ? 'Enviando...' : `Enviar ${pendingMessages} correos`}
          </button>
        </div>
      </main>
    </div>
  )
}

export default AdminLoginPage
