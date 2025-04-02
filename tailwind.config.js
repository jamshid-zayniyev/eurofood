/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear 0.25',
        'spin-veryslow': 'spin 15s linear infinite',
      }
    },
    // container: {
    //   center:true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '1.5rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
    colors:{
      transparent: 'transparent',
      green:'#016336',
      gray:'#F7F7F7',
      darkgray:'#A3ABB3',
      red:'#CE1136',
      lightyellow:'#FFFDF0',
      grayline:'#D1DCE6',
    }
    
  },
  plugins: [],
}

