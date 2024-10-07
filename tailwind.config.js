/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      screens: {
        'smallest': '320px',
        'sm1': "480px",
        'sm2': "560px",
        'md1': "640px",
        'mdl': '880px',
        'lpl': '1440px',
        'bigl': '1880px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

