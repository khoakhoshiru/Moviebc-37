/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        99: "55rem",
      },
      // colors: () => ({
      //   lime: {
      //     400: "red",
      //   },
      // }),
      // fontSize: {
      //   "2xl": "200px",
      // },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
