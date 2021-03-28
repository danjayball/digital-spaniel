module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#19293A',
        secondary: '#506473',
        accent: '#C0345E',
        'section-alt': '#EDEFF1',
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        title: ['ITC Avant Garde Gothic Std Medium', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
