/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors :{
        'bg-primary': "#1a202c",
        'bg-secondary': "#2d3748",
        'text-primary' : "#cbd5e0",
        'text-secondary' : "#718096",
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
