import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const actualYear = new Date().getFullYear();
  const location = useLocation().pathname;

  return (
    <footer
      className={`font-neue flex justify-between ${
        location !== '/' ? 'text-dq-light-gray' : ''
      }`}
    >
      <div>
        <p>¡Escribe lo que quieras!</p>
        <p>&copy; {actualYear} -- Decirte Que...</p>
      </div>
      <div>
        <div>
          <a href="#">Facebook</a>
          <a href="#" className="mx-4">
            Instagram
          </a>
          <a href="#">Twitter</a>
        </div>
        <p className="text-right">#DecirteQue</p>
      </div>
    </footer>
  );
};

export default Footer;
