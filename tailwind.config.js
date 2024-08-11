/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      transitionTimingFunction: {
        "ease-in-out-bezier": "cubic - bezier(0.645, 0.045, 0.355, 1)",
        "fast-bezier": "cubic - bezier(0.23, 1, 0.32, 1)",
      },
      fontFamily: {
        cantarell: "Cantarell-Regular",
        alexbrush: "AlexBrush-Regular",
      },
    },
  },
  plugins: [],
};
