/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Overpass':' sans-serif',
      },
      colors:{
        dark_blue:{
          100:'#262E38',
          200:'#131518',

        },
        black_gradient:{
          start:'#232A34',
          end:'#181E27'
        },
        orange_checked:'#FC7614',


      }
  },
  plugins: [],
}
}
