/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(164.45deg, #031723 6.82%, #06344F 77.28%)",
      },
      boxShadow: {
        "white-shadow": "0px 0px 9px 1px rgba(255,255,255,1)",
      },
    },
  },
  plugins: [],
};
