/** @type {import('tailwindcss').Config} */
import theme from "theme/src/config/theme"

module.exports = {
    content: [
        './**/*.{js,ts,vue}',
        '../components/**/*.{js,ts,vue}'
    ],
    theme: theme,
}
