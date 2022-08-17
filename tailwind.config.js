/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px'
    },
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)'
      },
      fontFamily: {
        sans: ["Josefin Sans", 'sans-serif'],
        alata: ["Alata"]
      }
    },
  },
  plugins: [],
}
