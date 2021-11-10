import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Components
import FacebookButton from '../components/FacebookButton'
import GoogleButton from '../components/GoogleButton'

// Context
import AuthContext from '../store/context/authentication/authContext'

// Routes
import { HOME } from '../routes'

const AuthPage = () => {
  const authContext = useContext(AuthContext)
  const { auth } = authContext

  const history = useHistory()

  useEffect(() => {
    if (auth) {
      return history.push(HOME)
    }
    //eslint-disable-next-line
  }, [auth])

  return (
    <AppLayout bgColor="#f2f2f2">
      <div className="font-neue text-center lg:text-left">
        <p className="hidden lg:block font-bold text-7xl text-dq-dark-gray">
          Para finalizar el envío <br />
          conéctate con:
        </p>
        <p className="lg:hidden font-bold text-4xl text-dq-dark-gray">
          Conéctate con:
        </p>
        <div className="mt-5 flex gap-10 justify-center lg:justify-start">
          <FacebookButton />
          <GoogleButton />
        </div>
      </div>
    </AppLayout>
  )
}

export default AuthPage
