module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      screens: {
        mdh: {
          raw: '(max-height: 650px)',
        }
      }
    },
  },
  plugins: [],
};
