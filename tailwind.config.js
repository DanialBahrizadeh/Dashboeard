/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "hsl(246, 80%, 60%)",
        red: {
          work: "hsl(15, 100%, 70%)",
          study: "hsl(348,100%,68%)",
        },
        blue: "hsl(195, 74%, 62%)",
        green: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        orange: "hsl(43, 84%, 65%)",
      },
      neutral: {
        blue: {
          "very-dark": "hsl(226, 43%, 10%)",
          dark: "hsl(235, 46%, 20%)",
          desaturated: "hsl(235, 45%, 61%)",
          pale: "hsl(236, 100%, 87%)",
        },
      },
      white: "hsl(0,0%,100%)",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },

    extend: {},
  },
  plugins: [],
};
