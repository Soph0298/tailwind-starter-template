module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#96CEB4",
        sand: "#DED9C4",
        darksand: "#D0CAB2",
        button: "#89B5AF",
        button1: "#96C7C1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
