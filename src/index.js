import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './fonts/HelveticaNeue/HelveticaNeue-Normal.ttf'
import './fonts/HelveticaNeue/HelveticaNeue-Bold.ttf'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById("root")
)