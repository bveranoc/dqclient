import React, { useRef, useState, useEffect } from 'react'

const ColorPicker = ({
  ctxColor,
  isText,
  homeData,
  setHomeData,
  setHomeColor,
}) => {
  const [color, setColor] = useState(ctxColor)
  const colorPicker = useRef()

  const onChange = () => {
    setColor(colorPicker.current.value.toUpperCase())
    setHomeColor(colorPicker.current.value.toUpperCase())
  }

  useEffect(() => {
    if (isText) {
      setHomeData({
        ...homeData,
        textColor: color,
      })
    } else {
      setHomeData({
        ...homeData,
        bgColor: color,
      })
    } //eslint-disable-next-line
  }, [color])

  return (
    <div className={isText ? 'mx-4' : ''}>
      <span className="text-sm">
        {isText ? 'Color de Texto' : 'Color de Fondo'}
      </span>
      <label
        htmlFor={isText ? 'colorpicker-text' : 'colorpicker-bg'}
        className="ml-3 underline cursor-pointer text-sm"
      >
        {color}
      </label>
      <input
        className="opacity-0 absolute"
        type="color"
        id={isText ? 'colorpicker-text' : 'colorpicker-bg'}
        ref={colorPicker}
        value={color}
        onChange={onChange}
      />
    </div>
  )
}

export default ColorPicker
