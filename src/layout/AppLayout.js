import React, { useContext } from 'react'

// Context
import ThemeContext from '../store/context/theming/themeContext'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AppLayout = ({ children }) => {
  const themeContext = useContext(ThemeContext)
  const { isWhiteTheme } = themeContext

  return (
    <div
      className={`flex flex-col min-h-screen ${
        !isWhiteTheme && 'bg-dq-bg-gray'
      }`}
    >
      <div className="flex-grow align-middle px-24 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
