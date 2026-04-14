import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp:           'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        fadeIn:           'fadeIn 0.6s ease-out forwards',
        'fadeUp-delay-1': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s forwards',
        'fadeUp-delay-2': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.34s forwards',
        'fadeUp-delay-3': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',
        scrollLine:       'scrollLine 1.8s ease-in-out infinite',
        float:            'float 4s ease-in-out infinite',
        slideLeft:        'slideLeft 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        slideRight:       'slideRight 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      letterSpacing: {
        'boutique': '0.18em',
        'luxury':   '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
