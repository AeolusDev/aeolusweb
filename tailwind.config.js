/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./app/assets/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '400px': '400px',
        '500px': '500px'
      },
      backgroundImage: {
        'about-pattern': "url('/app/assets/images/logo.png')"
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

