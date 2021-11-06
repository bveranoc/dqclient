import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'

// Context
import MsgState from './store/context/messaging/msgState'

ReactDOM.render(
  <MsgState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MsgState>,
  document.getElementById('root')
)
