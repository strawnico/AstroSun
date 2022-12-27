/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins' : ['Poppins']
    },
    extend: {
      colors: {
        'roxinho': '#8A63A8',
        'roxao': '#332844',
        'roxaozao': '#33284499',
        'phol': '#AEAEAE',
        'indiv': '#CACACA',
      },
    },
  },
  plugins: [],
}