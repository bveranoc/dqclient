import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className="font-neue font-bold text-8xl">Quería decirte que...</h1>
      <form className="font-neue">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="yo fui el que se"
            className="text-8xl font-bold placeholder-dq-dark-gray outline-none"
          />
          <div>
            <label htmlFor="">
              <input type="checkbox" /> Enviar mi mensaje de manera anónima
            </label>
            <label htmlFor="">Color de Fondo</label>
            <input type="color" name="" id="" />
            <label htmlFor="">Color de Texto</label>
            <input type="color" name="" id="" />
          </div>
        </div>
        <input type="submit" value="Enviar a" />
      </form>
    </div>
  );
};

export default HomePage;
