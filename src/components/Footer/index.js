import React from 'react'

const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="font-neue flex justify-between text-sm md:text-base flex-shrink-0 py-10 text-dq-light-gray bg-white px-2 md:px-12 lg:px-24">
      <div>
        <p>¡Escribe lo que quieras!</p>
        <p>&copy; {actualYear} -- Decirte Que...</p>
      </div>
      <div>
        <div>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com" className="mx-4">
            Instagram
          </a>
          <a href="https://twitter.com">Twitter</a>
        </div>
        <p className="text-right">#DecirteQue</p>
      </div>
    </footer>
  )
}

export default Footer
