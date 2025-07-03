/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a', // Green for buttons, navbar
        secondary: '#f3f4f6', // Light gray for background
      },
    },
  },
  plugins: [],
};