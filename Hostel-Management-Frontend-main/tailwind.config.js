/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          'fade-in': {
            '0%': {
              opacity: '0'
            },
            '100%': {
              opacity: '1'
            },
          }
        },
        animation: {
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'fade-in': 'fade-in 0.5s ease-out'
        }
      },
    },
    variants: {},
    plugins: [],
}

