/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'chewy': ['Chewy', 'sans-serif'],
        'motley': ['MotleyForces', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

