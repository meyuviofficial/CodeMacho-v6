/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./Blog/**/*.{mdx,md}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
