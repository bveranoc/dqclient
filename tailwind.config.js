module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'neue': ['Helvetica Neue', 'Helvetica'] 
    },
    extend: {
      colors: {
        'dq-dark-gray': '#aeaeae',
        'dq-light-gray': "#999999",
        'dq-bg-gray': '#f2f2f2'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
