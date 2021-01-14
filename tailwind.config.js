const plugin = require('tailwindcss/plugin')
// const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blue: {
        50: '#eef5fb',
        100: '#cde2f3',
        200: '#8bbce4',
        300: '#6aa9dc',
        400: '#4996d4',
        500: '#2f82c6',
        600: '#276ca5',
        700: '#1f5784',
        800: '#1c4164',
        900: '#0E273C',
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
        100: '#FBBE9D',
        200: '#FAA070',
        300: '#F88344',
        400: '#F76618',
        500: '#D65108',
        600: '#C04807',
        700: '#A73F06',
        800: '#A73F06',
        900: '#762C04',
      },
      yellow: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
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
      scale: {
        full: '1000',
      },
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
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scroll-smoothly': {
          scrollBehavior: 'smooth',
          '-webkitOverflowScrolling': 'touch',
        },
        '.snap-x-mandatory': {
          scrollSnapType: 'x mandatory',
        },
        '.snap-align-start': {
          scrollSnapAlign: 'start',
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
