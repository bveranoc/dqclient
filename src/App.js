import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import SetDestinataryPage from './pages/SetDestinataryPage'
import AuthPage from './pages/AuthPage'

// Router
import { HOME, SET_DESTINATARY, AUTH, DISPLAY_MESSAGE } from './routes'

const App = () => {
  const [isBgWhite, setIsBgWhite] = useState(false)

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          !isBgWhite && 'bg-dq-bg-gray'
        }`}
      >
        <div className="flex-grow align-middle px-24 flex flex-col">
          <Navbar setIsBgWhite={setIsBgWhite} />

          <div className="flex-1 flex flex-col justify-center">
            <Switch>
              <Route path={HOME} component={HomePage} exact />
              <Route
                path={SET_DESTINATARY}
                component={SetDestinataryPage}
                exact
              />
              <Route path={AUTH} component={AuthPage} exact />
              <Route path={DISPLAY_MESSAGE} component={MessagePage} exact />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
