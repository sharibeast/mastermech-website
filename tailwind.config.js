module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "custom-blue": "#065f78",
      "custom-white": "#fff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
