import React from 'react'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import FacebookIcon from '../../icons/FacebookIcon'

const CustomFBButton = () => {
  return (
    <button className="font-medium text-dq-dark-gray text-2xl border border-dq-dark-gray flex items-center">
      <div className="bg-dq-dark-gray w-10 py-2">
        <FacebookIcon />
      </div>
      <span className="px-3">Login with Facebook</span>
    </button>
  )
}

const FacebookButton = () => {
  return <FacebookLogin render={(renderProps) => <CustomFBButton />} />
}

export default FacebookButton
