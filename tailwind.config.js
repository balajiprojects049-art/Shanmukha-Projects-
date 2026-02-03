/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          blue: '#003366',
          orange: '#f39200',
          green: '#138808',
          teal: '#45b1b8',
          lime: '#a5d63f',
          text: '#1a202c',
          bg: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
