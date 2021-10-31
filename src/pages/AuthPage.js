import React, { useContext, useEffect } from 'react'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import ThemeContext from '../store/context/theming/themeContext'

// Components
import FacebookButton from '../components/FacebookButton'
import GoogleButton from '../components/GoogleButton'

const AuthPage = () => {
  const themeContext = useContext(ThemeContext)
  const { switchTheme } = themeContext

  useEffect(() => {
    switchTheme(false)
    //eslint-disable-next-line
  }, [])

  return (
    <AppLayout>
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
