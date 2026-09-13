/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#163331',
          darkTeal: '#21433D',
          light: '#F4FFFB',
          muted: '#9ECABC',
          button: '#BEDFD4',
          accentYellow: '#FFC436',
          cardBg: '#1a3d37',
        }
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'ad-image': '0px -4px 10px 5px rgba(33, 67, 61, 0.15)',
      }
    },
  },
  plugins: [],
}
