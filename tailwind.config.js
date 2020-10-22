module.exports = {
  theme: {
    extend: {
      colors: {
        blue: '#0e273c',
        green: '#32965d',
        orange: '#d65108',
        yellow: '#efa00b',
        tt: {
          primary: '#2374ab',
          secondary: '#4dccbd',
        },
      },
      inset: {
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        2: '0.5rem',
        4: '1rem',
        12: '3rem',
      },
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
  variants: {
    opacity: ['group-hover'],
    margin: ['group-hover'],
  },
}
