import React from 'react'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AppLayout = ({ children, bgColor }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-grow align-middle px-2 md:px-12 lg:px-24 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
