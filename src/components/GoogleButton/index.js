import React from 'react'

import GoogleLogin from 'react-google-login'

// Icon
import GoogleIcon from '../../icons/GoogleIcon'

const CustomButton = () => {
  return (
    <button className="font-medium text-dq-dark-gray text-2xl border border-dq-dark-gray flex items-center">
      <div className="bg-dq-dark-gray w-10 py-2">
        <GoogleIcon />
      </div>
      <span className="px-3">Login with Google</span>
    </button>
  )
}

const GoogleButton = () => {
  return <GoogleLogin render={(renderProps) => <CustomButton />} />
}

export default GoogleButton
