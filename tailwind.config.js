/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdl': '880px',
        'lpl': '1440px',
      },
    },
  },
  plugins: [],
}

