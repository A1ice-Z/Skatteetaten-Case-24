/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "inter"],
    },
    extend: {
      colors: {
        beige: {
          default: "#FBF9F1",
        },
        blue: {
          light: "#AAD7D9",
          default: "#265073",
        },
        gray: {
          default: "#D9D9D9",
          darker: "#9B9B9B",
        },
      },
    },
  },
  plugins: [],
}