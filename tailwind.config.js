// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#EF8B46",
        // secondary: "#FF69B4", --- Define Later
        background: "#F2F2F2",
        textPrimary: "#1C1C1E",
        textSecondary: "#646466",
        borderColor: "#C1C1C1",
      },
      fontFamily: {
        apple: ["SF Pro Text", "sans-serif"],
        secondary: ["SF Pro Display", "sans-serif"],
      },
      fontSize: {
        h1: ["32px", "40px"],
        h2: ["24px", "32px"],
        h3: ["18px", "28px"],
        body: ["16px", "20px"],
        caption: ["12px", "18px"],
      },
    },
  },
  plugins: [],
};
