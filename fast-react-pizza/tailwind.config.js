/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      // fontSize: {
      //   huge: ['80rem', { lineHeight: '1'}]
      // }
      // colors: {
      //   pizza: "#12345",
      // },
    },
  },
  plugins: [],
};
