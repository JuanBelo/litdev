module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-litdev": {
          500: "#8257E5",
          550: "#633BBC",
          600: "#51FA7B",
          625: "#248E3E",
          650: "#136127 ",
        },
        surface: {
          0: "#FFFFFF",
          100: "#F9FAFB",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          725: "#2A3745",
          750: "#222D38",
          800: "#212B36",
          815: "#202933",
          825: "#1E2730",
          850: "#161E26",
          875: "#2A2D37",
          900: "#1C1E27",
        },
      },
      fontFamily: {
        opensans: ["Source Code Pro", `monospace`],
      },
    },
  },
  plugins: [],
};
