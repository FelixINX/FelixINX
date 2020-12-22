const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blue: {
        50: '#F3F4F5',
        100: '#E7E9EC',
        200: '#C3C9CE',
        300: '#9FA9B1',
        400: '#566877',
        500: '#0E273C',
        600: '#0D2336',
        700: '#081724',
        800: '#06121B',
        900: '#040C12',
      },
      green: {
        50: '#F5FAF7',
        100: '#EBF5EF',
        200: '#CCE5D7',
        300: '#ADD5BE',
        400: '#70B68E',
        500: '#32965D',
        600: '#2D8754',
        700: '#1E5A38',
        800: '#17442A',
        900: '#0F2D1C',
      },
      orange: {
        50: '#FDF6F3',
        100: '#FBEEE6',
        200: '#F5D4C1',
        300: '#EFB99C',
        400: '#E28552',
        500: '#D65108',
        600: '#C14907',
        700: '#803105',
        800: '#602404',
        900: '#401802',
      },
      yellow: {
        50: '#FEFAF3',
        100: '#FDF6E7',
        200: '#FBE7C2',
        300: '#F9D99D',
        400: '#F4BD54',
        500: '#EFA00B',
        600: '#D7900A',
        700: '#8F6007',
        800: '#6C4805',
        900: '#483003',
      },
      tt: {
        primary: '#2374ab',
        'primary-dark': '#00497B',
        secondary: '#4dccbd',
        'secondary-dark': '#009A8D',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      // animation: {
      //   'appear-right': 'appear-right 1s ease-in-out 1',
      // },
      backgroundSize: {
        half: '50%',
      },
      borderWidth: {
        6: '6px',
      },
      inset: {
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        2: '0.5rem',
        4: '1rem',
        12: '3rem',
      },
      // keyframes: {
      //   'appear-right': {
      //     '0%': { transform: 'translateX(-150vw)' },
      //     '100%': { transform: 'translateX(0)' },
      //   },
      // },
      minHeight: (theme) => ({
        '(screen-24)': `calc(100vh - ${theme('spacing.24')})`,
      }),
      width: {
        double: '200%',
      },
    },
    fontFamily: {
      sans: ['Basier Circle', 'ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '8xl': '6rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scroll-smoothly': {
          scrollBehavior: 'smooth',
        },
      })
    }),
  ],
  variants: {
    extend: {
      margin: ['group-hover'],
    },
  },
}
