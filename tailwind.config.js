/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Add other directories if needed
  ],
  darkMode: "class", // Enables dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        // Add custom colors as needed
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        // Add other custom fonts if desired
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: Better form styling
    // Add other plugins if needed
  ],
};
