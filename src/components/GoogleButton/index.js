import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import GoogleLogin from 'react-google-login'

// Icon
import GoogleIcon from '../../icons/GoogleIcon'

// Context
import AuthContext from '../../store/context/authentication/authContext'

// Routes
import { SEND_MESSAGE } from '../../routes'

const CustomButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-medium text-dq-dark-gray text-2xl border border-dq-dark-gray flex items-center"
    >
      <div className="bg-dq-dark-gray w-12 lg:w-10 py-2">
        <GoogleIcon />
      </div>
      <span className="hidden lg:block px-3">Login with Google</span>
    </button>
  )
}
const GoogleButton = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const history = useHistory()

  const authContext = useContext(AuthContext)
  const { authUser } = authContext

  const callback = (res) => {
    const { givenName, familyName, email } = res.profileObj
    authUser(givenName, familyName, email, 'GOOGLE')
    history.push(SEND_MESSAGE)
  }

  return (
    <GoogleLogin
      clientId={googleClientId}
      onSuccess={callback}
      onFailure={(err) => console.log(err)}
      render={(renderProps) => <CustomButton onClick={renderProps.onClick} />}
    />
  )
}

export default GoogleButton
