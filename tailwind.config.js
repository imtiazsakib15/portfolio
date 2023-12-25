/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "banner": "url('/src/assets/banner-bg.jpg')",
    },
  },

  plugins: [require("daisyui")],
};
