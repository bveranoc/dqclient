import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'

// Context
import MsgState from './store/context/messaging/msgState'
import AuthState from './store/context/authentication/authState'

// Config
import authToken from './config/token'

// Verify if we have token
const token = localStorage.getItem('token')
if (token) {
  authToken(token)
}

ReactDOM.render(
  <AuthState>
    <MsgState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MsgState>
  </AuthState>,
  document.getElementById('root')
)
