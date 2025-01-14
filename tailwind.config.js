/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      goldenBeige: '#F2D291', // Color personalizado para el texto
      warmOrange: '#FF9300',
      customGold: '#EDA900',
      burntUmber: '#752400',
      customOrange: '#E1600E',
      tealBlue: '#009DB5',
      customGray: '#A9A9A9',
      transparent: '#00000000'
      // Color personalizado de fondo
    },
    fontFamily: {
      alice: ['Alice', 'serif'], // Fuente Alice
    },
    borderRadius: {
      custom: '12px',
      // Radio personalizado de 12 px
    },
    screens: {
      'movil': { 'max': '767px' },
      'tablet': { 'min': '768px', 'max': '1024px' },
      'portatil': { 'min': '1025px', 'max': '1366px' },
      'escritorio': { 'min': '1367px' },
    },//
  },
  maxWidth: {
    'content-desktop': '1366px',
    'content-laptop': '1024px',
    'content-tablet': '767px',
    'content-mobile': '380px',


  }, height: {
    'custom': '150px', // Altura personalizada
  },
  plugins: [],
}
