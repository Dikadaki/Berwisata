/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  dark:'class',
  theme: {
    container: {
      center: true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
  
}