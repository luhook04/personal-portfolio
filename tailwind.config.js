/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Welcome: ['Tahoma', 'sans-serif'],
        Change: ['Roboto', 'sans-serif'],
        About: ['Montserrat', 'sans-serif'],
      },
      animation: {
        slide: 'slide 1.7s ease-out',
        slide2: 'slide 1.9s ease-out',
        slide3: 'slide 2.1s ease-out',
        slide4: 'slide 2.3s ease-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-1000%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
