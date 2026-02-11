/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#000000',
          gray: {
            900: '#111111',
            800: '#333333',
            400: '#888888',
            100: '#f5f5f7',
            50: '#fafafa'
          }
        }
      },
      letterSpacing: {
        tightest: '-.025em',
        tighter: '-.05em',
      }
    },
  },
  plugins: [],
}
