/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1900px',
        '2xl': '1496px',
      },

      fontFamily: {
        primary: ['Arial', 'sans-serif']
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      }
    }

  },
  plugins: [],
}