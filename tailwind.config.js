module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: "var(--color-primary)",
      accent: "var(--color-accent)"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
