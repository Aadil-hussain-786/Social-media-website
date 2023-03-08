/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors: { white: "#fff" }, fontFamily: { barlow: "Barlow" } },
    fontSize: {},
  },
  corePlugins: { preflight: false },
};
