module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5B700',
          orange: '#E07B00',
          dark:   '#0F0F0F',
          cream:  '#FFF6E0',
          gold:   '#C48B00',
        },
      },
      fontFamily: {
        display:   ['"Luckiest Guy"', 'cursive'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
};
