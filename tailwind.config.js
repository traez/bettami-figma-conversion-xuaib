/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        trebuchetMs: ['Trebuchet MS'],
        cabinet: ['Cabinet Grotesk'],
      },
      screens: { 
        'tab': '720px', 
        'desk': '1440px', 
      },
    },
  },
  plugins: [],
}

