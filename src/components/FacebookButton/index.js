import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import FacebookIcon from '../../icons/FacebookIcon'

// Context
import AuthContext from '../../store/context/authentication/authContext'

// Routes
import { SEND_MESSAGE } from '../../routes'

const CustomFBButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-medium text-dq-dark-gray text-2xl border border-dq-dark-gray flex items-center"
    >
      <div className="bg-dq-dark-gray w-12 lg:w-10 py-2">
        <FacebookIcon />
      </div>
      <span className="hidden lg:block px-3">Login with Facebook</span>
    </button>
  )
}

const FacebookButton = () => {
  const fbAppId = process.env.REACT_APP_FACEBOOK_APP_ID
  const history = useHistory()

  const authContext = useContext(AuthContext)
  const { authUser } = authContext

  const callback = (res) => {
    authUser(res.first_name, res.last_name, res.email, 'FACEBOOK')
    history.push(SEND_MESSAGE)
  }

  return (
    <FacebookLogin
      appId={fbAppId}
      fields="first_name,last_name,email"
      scope="public_profile,email"
      callback={callback}
      disableMobileRedirect
      render={(renderProps) => <CustomFBButton onClick={renderProps.onClick} />}
    />
  )
}

export default FacebookButton
