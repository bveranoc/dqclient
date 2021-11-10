import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

// Context
import MsgContext from '../store/context/messaging/msgContext'

// Components
import ColorPicker from '../components/ColorPicker'
import DatePicker from '../components/DatePicker'

// Routes
import { SET_DESTINATARY } from '../routes'

const HomePage = () => {
  // Load Context
  const msgContext = useContext(MsgContext)
  const { saveHomeData, body, isAnonymus, bgColor, textColor, sendingDate } =
    msgContext

  // Load State
  const [homeBg, setHomeBg] = useState(bgColor)
  const [homeTxt, setHomeTxt] = useState(textColor)

  // Load router
  let history = useHistory()

  const [homeData, setHomeData] = useState({
    body,
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
    <AppLayout bgColor={homeBg}>
      <div className="flex justify-center flex-col py-10">
        <h1
          className="font-neue font-bold text-4xl md:text-6xl lg:text-8xl"
          style={{ color: homeTxt }}
        >
          Quería decirte que...
        </h1>
        <form className="font-neue" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              className="text-4xl md:text-6xl lg:text-8xl font-bold outline-none bg-transparent"
              autoFocus
              value={homeData.body}
              onChange={(e) =>
                setHomeData({ ...homeData, body: e.target.value })
              }
              style={{ color: homeTxt }}
              maxLength="20"
              required
            />
            <div className="my-7 flex flex-col-reverse md:flex-row">
              <label
                className="flex items-center mr-5"
                htmlFor="checkbox-anonymus"
              >
                <input
                  className="md:w-5 md:h-5 mr-2"
                  type="checkbox"
                  id="checkbox-anonymus"
                  checked={homeData.isAnonymus}
                  onChange={(e) =>
                    setHomeData({ ...homeData, isAnonymus: e.target.checked })
                  }
                />
                Enviar mi mensaje de manera anónima.
              </label>
              <div className="flex">
                <ColorPicker
                  ctxColor={bgColor}
                  homeData={homeData}
                  setHomeData={setHomeData}
                  setHomeColor={setHomeBg}
                />
                <ColorPicker
                  ctxColor={textColor}
                  isText
                  homeData={homeData}
                  setHomeData={setHomeData}
                  setHomeColor={setHomeTxt}
                />
              </div>
            </div>
          </div>
          <div className="flex items-stretch relative">
            <button
              className="font-bold border-2 border-black bg-transparent text-2xl md:text-4xl cursor-pointer py-1 px-2 md:py-2 md:px-3 mr-0.5"
              type="submit"
            >
              Enviar a
            </button>
            <DatePicker homeData={homeData} setHomeData={setHomeData} />
          </div>
          <p className="mt-2">
            Se enviará el{' '}
            {homeData.sendingDate &&
              homeData.sendingDate.split('-').reverse().join('/')}
          </p>
        </form>
      </div>
    </AppLayout>
  )
}

export default HomePage
