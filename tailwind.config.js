/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pastelwhite": "#F9F9F9",
        "grey": "#D9D9D9",
        "darkgrey": "#5B5B5B",
        "violet": "#9039FF"
      }
    },
  },
  plugins: [],
}

