import React from 'react'

// Layout
import AppLayout from '../layout/AppLayout'

// Components
import FacebookButton from '../components/FacebookButton'
import GoogleButton from '../components/GoogleButton'

const AuthPage = () => {
  return (
    <AppLayout bgColor="#f2f2f2">
      <div className="font-neue">
        <p className="font-bold text-7xl text-dq-dark-gray">
          Para finalizar el envío <br />
          conéctate con:
        </p>
        <div className="mt-5 flex gap-10">
          <FacebookButton />
          <GoogleButton />
        </div>
      </div>
    </AppLayout>
  )
}

export default AuthPage
