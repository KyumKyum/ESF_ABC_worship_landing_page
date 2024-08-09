/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: "Pretendard",
        Jeju: "Jeju",
        Okay: "Okay"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
