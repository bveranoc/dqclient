import React, { useContext, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import ThemeContext from '../store/context/theming/themeContext'
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

  const themeContext = useContext(ThemeContext)
  const msgContext = useContext(MsgContext)
  const { switchTheme } = themeContext
  const { saveDestinatary } = msgContext

  const onChange = () => {
    setDestinatary(destinataryRef.current.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    saveDestinatary(destinatary)
  }

  useEffect(() => {
    switchTheme(false)
    //eslint-disable-next-line
  }, [])

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AppLayout>
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
              <span className="align-text-top">Enviar</span>
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
