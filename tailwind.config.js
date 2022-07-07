module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-litdev": {
          500: "#FC9A1D",
          550: "#FC9A1D",
          600: "#FC9A1D",
          625: "#1B323E",
          650: "#1B323E ",
          700: "#FFD89D",
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
          875: "#212430",
          875: "#2A2D37",
          900: "#1C1E27",
        },
      },
      fontFamily: {
        opensans: ["Open Sans", `sans-serif`],
        "Source+Sans+Pro": ["Source Code Pro", `sans-serif`],
        inter: ["Inter", `sans-serif`],
        roboto: ["Roboto", `sans-serif`],
      },
    },
  },
  plugins: [],
};
