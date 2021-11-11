import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { ADMIN_AUTH } from './index'

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const token = localStorage.getItem('adm-token')

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to={ADMIN_AUTH} />
      }
    />
  )
}

export default ProtectedRoute
