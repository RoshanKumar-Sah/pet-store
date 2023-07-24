/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007FFF',
        'secondary': '#17224D',
        'normal': '#F5FAFA',
        'header': '#292929',
        'content': '#515151'
      },
      backgroundImage: {
        "banner2": "url('../assets/banner2.png')"
      },
    },

  },
  plugins: [],
}
