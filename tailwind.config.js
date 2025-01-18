/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        "dm-sans": "'DM Sans', sans-serif",
      },

      colors:{
        "blue-color": "#88bcbf",
        "gray-color": '#828282',
        "card-color": '#212121',
        "color-background": '#171717',
        "menu-color": "#172554"
      },

      backgroundImage: {
        "open-menu": "url('../assets/menu.svg')",
        "close-menu": "url('../assets/close.svg')"
      }

    },
  },
  plugins: [],
}

