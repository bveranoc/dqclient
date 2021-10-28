import React from 'react'

// Components
import ColorPicker from '../components/ColorPicker'
import DatePicker from '../components/DatePicker'

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col py-10">
      <h1 className="font-neue font-bold text-8xl">Quería decirte que...</h1>
      <form className="font-neue">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="yo fui el que se"
            className="text-8xl font-bold placeholder-dq-dark-gray outline-none bg-transparent"
            autoFocus
          />
          <div className="my-7 flex">
            <label className="flex items-center" htmlFor="checkbox-anonymus">
              <input
                className="w-5 h-5 mr-2"
                type="checkbox"
                id="checkbox-anonymus"
              />
              Enviar mi mensaje de manera anónima.
            </label>
            <ColorPicker />
            <ColorPicker isText />
          </div>
        </div>
        <div className="flex items-stretch">
          <button
            className="font-bold border-2 border-black bg-transparent text-4xl cursor-pointer py-2 px-3 mr-0.5"
            type="submit"
          >
            Enviar a
          </button>
          <DatePicker />
        </div>
      </form>
    </div>
  )
}

export default HomePage
