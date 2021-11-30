module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        "home-pattern": "url('pattern-bg.png')",
        "icon-arrow": "url('icon-arrow.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
