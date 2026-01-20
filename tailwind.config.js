/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border|from|to)-(brand|red|indigo|orange|emerald)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['dark', 'hover', 'group-hover'],
    },
    {
      pattern: /bg-(brand|red|indigo|orange|emerald)-900\/30/,
      variants: ['dark'],
    },
    {
      pattern: /border-(brand|red|indigo|orange|emerald)-800\/50/,
      variants: ['dark'],
    },
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 
          600: '#0284c7', 800: '#075985', 900: '#0c4a6e',
        },
        slate: { 850: '#1e293b', 900: '#0f172a' }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
