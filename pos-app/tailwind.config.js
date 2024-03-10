/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#02A676',
        secondary: '#008C72',
        color1: '#3490dc',
        color2: '#f6993f',
        color3: '#8B67F3'
      }
    }
  },
  plugins: []
}
