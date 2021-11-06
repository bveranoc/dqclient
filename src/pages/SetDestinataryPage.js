import React, { useContext, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'

// Icons
import EnterIcon from '../icons/EnterIcon'

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
  const { saveDestinatary } = msgContext

  const onChange = () => {
    setDestinatary(destinataryRef.current.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    saveDestinatary(destinatary)
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
        <form className="font-neue text-dq-dark-gray" onSubmit={onSubmit}>
          <div className="flex items-center justify-between">
            <input
              type="email"
              placeholder="@"
              className="text-8xl font-bold placeholder-dq-dark-gray outline-none bg-transparent"
              required
              autoFocus
              ref={destinataryRef}
              onChange={onChange}
            />
            <button
              className="font-medium text-3xl flex items-center"
              type="submit"
            >
              <EnterIcon />
              <span className="align-text-top hover:text-black">Enviar</span>
            </button>
          </div>
          <p className="mt-7 font-medium text-3xl">
            Ingresa el correo electrónico de destino
          </p>
        </form>
      </AppLayout>
    </motion.div>
  )
}

export default SetDestinataryPage
