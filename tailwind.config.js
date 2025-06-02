/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /col-span-(1|2|3|4)/,
    },
    {
      pattern: /row-span-(1|2|3|4)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        backdrop: "#0a0a0a", //"#4c4c4c"#212529,
        primary: "#f36100",
        secondary: "#151515",
        light: "#ffffff",
        dark: "#a9a9a9",
        text: "#c4c4c4",
        accent: "#232323",
      },
      fontFamily: {
        gaegu: ["Gaegu", "cursive"],
        muli: ["Muli", "sans-serif"],
        oswald: ["Oswald", "Merriweather", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

