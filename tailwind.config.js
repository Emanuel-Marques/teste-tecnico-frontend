/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5A84C0',
        'custom-purple': '#594ED2',
      },
    },
  },
  plugins: [],
}

