/** @type {import('tailwindcss').Config} */
import theme from "theme/src/config/theme";

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,vue}",
    "../components/**/*.{js,ts,vue}"
  ],
  theme,
  plugins: [],
}

