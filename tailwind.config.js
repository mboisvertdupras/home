
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bluunext Bold", "sans-serif"],
      },
      colors: {
        sage: {
          100: "#f3f7f2",
          150: "#e6efdf",
          200: "#ebf1e7",
          300: "#d4e2cd",
          400: "#c7d9be",
          500: "#4e6c3e",
          600: "#3b522f",
          700: "#344829",
          800: "#293820",
          900: "#212e1a",
        }
      },
      animation: {
        "wave": "wave-animation 2.5s infinite",
      },
      keyframes: {
        "wave-animation": {
          '0%': { transform: 'rotate(0.0deg) scale(1)' },
          '10%': { transform: 'rotate(14.0deg) scale(1.3)' },
          '20%': { transform: 'rotate(-8.0deg) scale(1.3)' },
          '30%': { transform: 'rotate(14.0deg) scale(1.3)' },
          '40%': { transform: 'rotate(-4.0deg) scale(1.3)' },
          '50%': { transform: 'rotate(10.0deg) scale(1.3)' },
          '60%': { transform: 'rotate(0.0deg) scale(1)' },
          '100%': { transform: 'rotate(0.0deg) scale(1)' }
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.sage.500'),
            '--tw-prose-headings': theme('colors.sage.700'),
          }
        }
      })
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};