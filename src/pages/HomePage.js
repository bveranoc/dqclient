import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'
import ThemeContext from '../store/context/theming/themeContext'

// Components
import ColorPicker from '../components/ColorPicker'
import DatePicker from '../components/DatePicker'

// Routes
import { SET_DESTINATARY } from '../routes'

const HomePage = () => {
  // Load Context
  const msgContext = useContext(MsgContext)
  const themeContext = useContext(ThemeContext)
  const { saveHomeData, message, isAnonymus, bgColor, textColor, sendingDate } =
    msgContext
  const { switchTheme } = themeContext

  useEffect(() => {
    switchTheme(true)
    //eslint-disable-next-line
  }, [])

  // Load router
  let history = useHistory()

  const [homeData, setHomeData] = useState({
    message,
    isAnonymus,
    bgColor,
    textColor,
    sendingDate,
  })

  const onSubmit = (e) => {
    e.preventDefault()
    saveHomeData(homeData)

    history.push(SET_DESTINATARY)
  }

  return (
    <AppLayout>
      <div className="flex justify-center flex-col py-10">
        <h1 className="font-neue font-bold text-8xl">Quería decirte que...</h1>
        <form className="font-neue" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="yo fui el que se"
              className="text-8xl font-bold placeholder-dq-dark-gray outline-none bg-transparent"
              autoFocus
              value={homeData.message}
              onChange={(e) =>
                setHomeData({ ...homeData, message: e.target.value })
              }
              required
            />
            <div className="my-7 flex">
              <label className="flex items-center" htmlFor="checkbox-anonymus">
                <input
                  className="w-5 h-5 mr-2"
                  type="checkbox"
                  id="checkbox-anonymus"
                  checked={homeData.isAnonymus}
                  onChange={(e) =>
                    setHomeData({ ...homeData, isAnonymus: e.target.checked })
                  }
                />
                Enviar mi mensaje de manera anónima.
              </label>
              <ColorPicker
                ctxColor={bgColor}
                homeData={homeData}
                setHomeData={setHomeData}
              />
              <ColorPicker
                ctxColor={textColor}
                isText
                homeData={homeData}
                setHomeData={setHomeData}
              />
            </div>
          </div>
          <div className="flex items-stretch">
            <button
              className="font-bold border-2 border-black bg-transparent text-4xl cursor-pointer py-2 px-3 mr-0.5"
              type="submit"
            >
              Enviar a
            </button>
            <DatePicker homeData={homeData} setHomeData={setHomeData} />
          </div>
        </form>
      </div>
    </AppLayout>
  )
}

export default HomePage
