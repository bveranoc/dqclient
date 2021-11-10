import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import SetDestinataryPage from './pages/SetDestinataryPage'
import AuthPage from './pages/AuthPage'
import ThankYouPage from './pages/ThankYouPage'
import SendMessagePage from './pages/SendMessagePage'

// Router
import {
  HOME,
  SET_DESTINATARY,
  AUTH,
  DISPLAY_MESSAGE,
  THANK_YOU,
  SEND_MESSAGE,
} from './routes'

import AuthContext from './store/context/authentication/authContext'

const App = () => {
  const authContext = useContext(AuthContext)
  const { setToken } = authContext

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(token)
    }
    //eslint-disable-next-line
  }, [])

  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path={HOME} component={HomePage} exact />
          <Route path={SET_DESTINATARY} component={SetDestinataryPage} exact />
          <Route path={AUTH} component={AuthPage} exact />
          <Route path={DISPLAY_MESSAGE} component={MessagePage} exact />
          <Route path={THANK_YOU} component={ThankYouPage} exact />
          <Route path={SEND_MESSAGE} component={SendMessagePage} exact />
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
