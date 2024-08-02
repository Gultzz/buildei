/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "primary-500": "#66FFAC",
        "primary-800": "#22A35D",
        gray: "#141414",
      },
    },
  },
  plugins: [],
};
