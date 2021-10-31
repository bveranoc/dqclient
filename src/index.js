import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'

// Context
import MsgState from './store/context/messaging/msgState'
import ThemeState from './store/context/theming/themeState'

ReactDOM.render(
  <ThemeState>
    <MsgState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MsgState>
  </ThemeState>,
  document.getElementById('root')
)
