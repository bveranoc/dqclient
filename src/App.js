import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import SetDestinataryPage from './pages/SetDestinataryPage'
import AuthPage from './pages/AuthPage'

// Router
import { HOME, SET_DESTINATARY, AUTH, DISPLAY_MESSAGE } from './routes'

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path={HOME} component={HomePage} exact />
          <Route path={SET_DESTINATARY} component={SetDestinataryPage} exact />
          <Route path={AUTH} component={AuthPage} exact />
          <Route path={DISPLAY_MESSAGE} component={MessagePage} exact />
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
