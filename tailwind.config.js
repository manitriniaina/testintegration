/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      padding: '1rem',
      center: true,
    },
    // screens: {
    //   '2xl': '1638px',
    // },
    extend: {
      fontSize: {
        xs: '14px',
        sm: '15px',
        base: '20px',
        md: '24px',
        xl: '50px',
        '2xl': '60px',
        '3xl': '80px',
      },
      lineHeight: {
        lxs: '21px',
        lsm: '23px',
        lbase: '30px',
        lmd: '26px',
        lxl: '60px',
        'l2xl': '70px',
        'l3xl': '100px',
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'primary': '#022D45',
      'gray': {
        '100': '#00000000',
        '200': '#0000000D',
        '300': '#F5F5FA',
        '400': '#F6F7FF',
        '500': '#25345033',
        '600': '#D0D0D0',
      },
      'dark': {
        '100': '#4B4B4B',
        '200': '#000000B4',
        '300': '#022D45',
        '400': '#253450',
        '500': '#000000',
      },
      'red': {
        '100': '#E8516E',
        '200': '#E94E6F',
        '300': '#EA516F',
        '400': '#EA506F',
        '500': '#d73f5d',
      },
      'blue': '#0CBCE7',
      'transparent-gray': '#FFFFFF65',
      'orange': '#F39870',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

