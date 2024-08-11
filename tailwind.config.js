/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        backgroundColor: "background-color",
      },
      transitionTimingFunction: {
        "ease-in-out-bezier": "cubic - bezier(0.645, 0.045, 0.355, 1)",
        "fast-bezier": "cubic - bezier(0.23, 1, 0.32, 1)",
      },
      fontFamily: {
        cantarell: "Cantarell-Regular",
        alexbrush: "AlexBrush-Regular",
      },
      colors: {
        primary: "#0b4e97",
        success: "#67c23a",
        warning: "#e6a23c",
        info: "#909399",
        danger: "#f56c6c",
      },
    },
  },
  plugins: [],
};
