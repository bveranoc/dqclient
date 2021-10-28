import React from 'react'

const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="font-neue flex justify-between flex-shrink-0 py-10 text-dq-light-gray bg-white px-24">
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
  )
}

export default Footer
