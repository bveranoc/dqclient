import React, { useContext, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'
import AuthContext from '../store/context/authentication/authContext'

// Icons
import EnterIcon from '../icons/EnterIcon'

// Routes
import { AUTH, SEND_MESSAGE } from '../routes'

const pageVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '-100vh',
  },
}

const pageTransition = {
  duration: 0.3,
}

const SetDestinataryPage = () => {
  const [destinatary, setDestinatary] = useState('')
  const destinataryRef = useRef()

  const msgContext = useContext(MsgContext)
  const authContext = useContext(AuthContext)
  const { saveDestinatary } = msgContext
  const { auth } = authContext

  const history = useHistory()

  const onChange = () => {
    setDestinatary(destinataryRef.current.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    saveDestinatary(destinatary)
    if (!auth) {
      return history.push(AUTH)
    }
    return history.push(SEND_MESSAGE)
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AppLayout bgColor="#f2f2f2">
        <form
          className="font-neue text-dq-dark-gray text-center lg:text-left"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="@"
              className="text-center lg:text-left text-2xl md:text-4xl lg:text-8xl w-full lg:w-auto  font-bold placeholder-dq-dark-gray outline-none bg-transparent"
              required
              autoFocus
              ref={destinataryRef}
              onChange={onChange}
              value={destinatary}
            />
            <p className="lg:hidden mb-5 font-medium text-base lg:text-3xl">
              Ingresa el correo electrónico de destino
            </p>
            <button
              className="font-medium border-2 border-dq-dark-gray lg:border-none text-xl lg:text-3xl flex items-center px-2 py-1 lg:p-0"
              type="submit"
            >
              <div className="hidden lg:block">
                <EnterIcon />
              </div>
              <span className="align-text-top hover:text-black">Enviar</span>
            </button>
          </div>
          <p className="hidden lg:block mt-7 font-medium text-base lg:text-3xl">
            Ingresa el correo electrónico de destino
          </p>
        </form>
      </AppLayout>
    </motion.div>
  )
}

export default SetDestinataryPage
