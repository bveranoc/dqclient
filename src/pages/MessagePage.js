import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Icons
import FacebookLinkIcon from '../icons/FacebookLinkIcon'
import TwitterLinkIcon from '../icons/TwitterLinkIcon'

import MsgContext from '../store/context/messaging/msgContext'

// Routes
import { HOME } from '../routes'

const MessagePage = () => {
  const location = useLocation()
  const webUrl = process.env.REACT_APP_WEB_URL

  const [message, setMessage] = useState({
    _id: '',
    body: '',
    destinatary: '',
    bgColor: '#FFFFFF',
    textColor: '#000000',
    isSent: false,
    isAnonymus: false,
    sendingDate: '',
    createdAt: '',
    updatedAt: '',
    sender: '',
  })
  const { id } = useParams()

  const msgContext = useContext(MsgContext)
  const { getMessage } = msgContext

  useEffect(() => {
    getMessage(id, setMessage)
    //eslint-disable-next-line
  }, [])

  return (
    <AppLayout bgColor={message.bgColor} footerColor={message.bgColor}>
      <h1
        className="font-neue font-bold text-4xl md:text-6xl lg:text-8xl"
        style={{ color: message.textColor }}
      >
        Quería decirte que {message.body.toLowerCase()}
      </h1>
      <div className="block lg:flex lg:items-center lg:gap-8">
        {!message.isAnonymus && (
          <p className="font-neue mt-3 md:text-lg">
            <b>De: {message.sender}</b>
          </p>
        )}
        <div className="font-neue mt-24 md:mt-12 lg:mt-4 flex items-center gap-5">
          <p style={{ color: message.textColor }}>
            <Link to={HOME} className="underline">
              Responder
            </Link>{' '}
            ó compartir en:
          </p>
          <div className="flex gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${webUrl}${location.pathname}`}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLinkIcon />
            </a>
            <a
              href={`https://twitter.com/share?url=${webUrl}${
                location.pathname
              }&text=${`Mira lo que me dijeron!`}`}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default MessagePage
