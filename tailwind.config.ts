import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'integrify-certificate': "url('/utils/images/integrify-certificate')",
      },
      colors: {
        'logo-blue': '#4dc5ff',
        'logo-blue-light': '#4dc5ff',
        'card-start': '#04080f',
        'card-end': '#05040cff',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      boxShadow: {
        'in-dark': '0 0 20px rgba(0, 170, 255, 1)',
      },
    },
  },

  plugins: [],
  darkMode: 'media' && 'class',
}
export default config
