import React, { useContext, useEffect } from 'react'

import ThemeContext from '../store/context/theming/themeContext'

// Layout
import AppLayout from '../layout/AppLayout'

const MessagePage = () => {
  const themeContext = useContext(ThemeContext)
  const { switchTheme } = themeContext

  useEffect(() => {
    switchTheme(true)
    //eslint-disable-next-line
  }, [])

  return (
    <AppLayout>
      <p>Hola</p>
    </AppLayout>
  )
}

export default MessagePage
