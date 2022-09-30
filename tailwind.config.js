/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bluunext Bold", "sans-serif"],
      },
      colors: {
        sage: {
          100: "#f3f7f2",
          200: "#e6efdf",
          300: "#ebf1e7",
          400: "#c7d9be",
          500: "#4e6c3e",
          600: "#3b522f",
          700: "#374151",
          800: "#293820",
          900: "#212e1a",
        }
      }
    },
  },
  plugins: [],
}
