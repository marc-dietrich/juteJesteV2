import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42512b',
        secondary: '#904d00',
        surface: '#fff8ef',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fbf3e4',
        'surface-container': '#f5edde',
        'surface-container-high': '#efe7d9',
        'surface-container-highest': '#e9e2d3',
        'outline-variant': '#c5c8b8',
        'on-surface': '#1e1b13',
        'on-surface-variant': '#45483c',
        'secondary-container': '#fe932c',
        'on-secondary-container': '#663500',
        'primary-fixed-dim': '#bbcd9c',
        'tertiary-fixed': '#ffdbcb',
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 20px 40px rgba(30, 27, 19, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
      },
      backgroundImage: {
        hearth: 'linear-gradient(145deg, #42512b, #596941)',
      },
    },
  },
  plugins: [],
} satisfies Config
