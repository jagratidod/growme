/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EE',
        'warm-white': '#FFFDF8',
        primary: '#F97316',
        'primary-dark': '#EA580C',
        'primary-light': '#FDBA74',
        black: '#111111',
        'deep-black': '#080808',
        'light-gray': '#F1F1F1',
        'medium-gray': '#777777',
        'border-gray': '#E5E5E5',
        'dark-gray': '#292929',
        'yellow-sticker': '#FDE68A',
        'tag-blue': '#DBEAFE',
        'tag-green': '#D1FAE5',
        'tag-purple': '#EDE9FE',
        'tag-pink': '#FCE7F3',
        violet: '#4120F7',
        'violet-dark': '#3014D8',
        'violet-light': '#6A4FF9',
        'violet-soft': '#EDE9FE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 5px 0px #111111',
        'brutal-sm': '3px 4px 0px #111111',
        'brutal-lg': '6px 7px 0px #111111',
        'brutal-orange': '4px 5px 0px #F97316',
        'brutal-violet': '4px 5px 0px #4120F7',
        'brutal-violet-lg': '6px 7px 0px #4120F7',
        'brutal-hover': '5px 6px 0px #111111',
        'brutal-active': '1px 2px 0px #111111',
      },
      borderWidth: {
        '3': '3px',
      },
      rotate: {
        '-3': '-3deg',
        '-2': '-2deg',
        '2': '2deg',
        '3': '3deg',
        '5': '5deg',
        '-5': '-5deg',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
