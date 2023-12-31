/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'lightyellow': '#fdf3da',
        'lightred' :'#ed6ea0'
      },
      spacing: {
        '128': '50vw',
        '111': '20vw',
        '123':'50rem',
      }
    },
  },
  plugins: [],
}