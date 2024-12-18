/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1E33",
        secondary: "#303653",
        footerfond: "#4c4f71",
        accent: "#00ADB5",
        highlight: "#FFBC42",
        textLight: "#EEEEEE",
        sidemenu: "#0c1029"
      },
    },
  },
  plugins: ["tailwind-scrollbar-hide"],
};
