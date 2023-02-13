/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      'main' : ['Zilla Slab', 'sans-serif']
    },
    colors : {
      'main-bg' : '#FFFFFF', 
      'heading' : '#112A43',
      'main-text' : '#F5ECE5',
      'btn-bg' : '#AA7A5E',
      'details-text' : '#844C43',
      'deep-red' : '#BA2524',
      'modal-bg' : '#EADED7'
    },
    extend: {},
  },
  plugins: [],
}
