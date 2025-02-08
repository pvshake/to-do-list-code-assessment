/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      spacing: {
        2.5: '10px',
        3.75: '15px',
        7.5: '30px',
        15: '60px'
      },
      borderRadius: {
        2.5: '10px',
        3.75: '15px',
        7.5: '30px'
      },
      colors: {
        primary: {
          50: '#EFF4FC',
          100: '#F2F3F5',
          200: '#D3DBE9',
          300: '#D5D9E1',
          400: '#DDE4F1',
          500: '#DFD9D3',
          600: '#94A1B7',
          700: '#23243D'
        },
        custom: {
          blue: '#4691E8',
          green: '#578F5D'
        },
        black: {
          100: '#0D1117',
          200: '#161B22',
          300: '#1F2428',
          400: '#242C38',
          DEFAULT: '#000000'
        },
        white: {
          100: '#FAFAFA',
          200: '#F0F0F0',
          300: '#E5E5E5',
          400: '#D9D9D9',
          500: '#CCCCCC',
          600: '#B3B3B3',
          DEFAULT: '#FFFFFF'
        },
        gray: {
          100: '#D5D9E1',
          200: '#D3DBE9',
          300: '#DDE4F1',
          400: '#DFD9D3',
          500: '#94A1B7',
          600: '#23243D',
          700: '#F2F3F5'
        }
      }
    }
  },
  plugins: []
}
