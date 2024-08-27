/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0D4DCB",
      secondary: "#003863",
      danger: "#ff0000",
      warning: "#ff9800",
      success: "#198754",
      white: '#fff',
      gray: {
        light: "#e5e5e5",
        default: "#888d94",
        mid: "#eff0f6",
      },
      inputBg: "#EFF1FD"
    },
  },
  plugins: [],
};
