import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'
import AuthContext from '../store/context/authentication/authContext'

// Routes
import { THANK_YOU } from '../routes'

const SendMessagePage = () => {
  const history = useHistory()

  const msgContext = useContext(MsgContext)
  const authContext = useContext(AuthContext)
  const { body, sendMessage } = msgContext
  const { auth } = authContext

  useEffect(() => {
    if (auth) {
      function send() {
        setTimeout(async () => {
          await sendMessage()
          history.push(THANK_YOU)
        }, 2000)
      }

      if (body !== '') {
        send()
      }
    }
    //eslint-disable-next-line
  }, [auth])

  return (
    <AppLayout bgColor="#f2f2f2">
      <div className="font-neue text-center">
        <h2 className="text-xl md:text-4xl">Enviando mensaje...</h2>
      </div>
    </AppLayout>
  )
}

export default SendMessagePage
