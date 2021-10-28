import React, { useRef, useState } from 'react';

const ColorPicker = ({ isText }) => {
  const [color, setColor] = useState(isText ? '#000000' : '#FFFFFF');
  const colorPicker = useRef();

  const onChange = () => {
    setColor(colorPicker.current.value.toUpperCase());
  };

  return (
    <div className={isText ? '' : 'mx-4'}>
      <span>{isText ? 'Color de Texto' : 'Color de Fondo'}</span>
      <label
        htmlFor={isText ? 'colorpicker-text' : 'colorpicker-bg'}
        className="ml-3 underline cursor-pointer"
      >
        {color}
      </label>
      <input
        className="opacity-0 absolute"
        type="color"
        id={isText ? 'colorpicker-text' : 'colorpicker-bg'}
        ref={colorPicker}
        onChange={onChange}
      />
    </div>
  );
};

export default ColorPicker;
