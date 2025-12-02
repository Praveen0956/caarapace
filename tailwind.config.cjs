// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          300: '#fb7185',
          500: '#e11d48', // primary red
          600: '#be123c',
          700: '#9f1239'
        },
        neutral: {
          50: '#ffffff',
          100: '#f8fafc',
          300: '#cbd5e1',
          600: '#475569'
        }
      },
      fontFamily: {
        display: ['Inter','sans-serif'],
        body: ['Inter','sans-serif']
      },
      boxShadow: {
        'soft-xl': '0 18px 40px rgba(2,6,23,0.06)',
        'red-glow': '0 8px 40px rgba(225,29,72,0.12)'
      }
    }
  },
  plugins: []
};
