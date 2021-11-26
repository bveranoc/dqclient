import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'

// Routes
import { THANK_YOU } from '../routes'

const SendMessagePage = () => {
  const history = useHistory()

  const msgContext = useContext(MsgContext)
  const { body, sendMessage } = msgContext

  useEffect(() => {
    function send() {
      setTimeout(async () => {
        await sendMessage()
        history.push(THANK_YOU)
      }, 2000)
    }

    if (body !== '') {
      send()
    }

    //eslint-disable-next-line
  }, [])

  return (
    <AppLayout bgColor="#f2f2f2">
      <div className="font-neue text-center">
        <h2 className="text-xl md:text-4xl">Enviando mensaje...</h2>
      </div>
    </AppLayout>
  )
}

export default SendMessagePage
