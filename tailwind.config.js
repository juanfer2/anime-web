module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    darkSelector: '.mode-dark',
    extend: {},
    colors: {
      'blue-custom': '#224343D',
      'gray-custom': '#777676',
      'black-custom': '#000000',
      'orange-custom': '#FF7660F',
      'withe-custom': '#FFFFFF',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    variants: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    }
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-dark-mode')()]
};
