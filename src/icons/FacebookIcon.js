import React from 'react'

const FacebookIcon = () => {
  return (
    <svg
      width="19"
      height="40"
      viewBox="0 0 19 40"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-8 mx-auto"
    >
      <defs>
        <path id="a" d="M0 0h18.105v39.414H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          d="M4.109 39.414h7.898V19.539h5.511l.587-6.654h-6.098v-3.79c0-1.569.314-2.189 1.823-2.189h4.275V0h-5.469C6.759 0 4.109 2.6 4.109 7.58v5.305H0v6.738H4.11v19.79z"
          fill="#F2F2F2"
          mask="url(#b)"
        />
      </g>
    </svg>
  )
}

export default FacebookIcon
