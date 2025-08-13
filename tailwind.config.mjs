/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#F6F6F6",
        primary: "#070707",
        paragraph: "#6A6A6A",
        accent: {
          DEFAULT: "#769FD8",
          100: "#DCEAFE",
        },
      },
    },
  },
  plugins: [],
};
