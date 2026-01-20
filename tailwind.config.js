/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#eab308", // Will adjust to match Revo theme (red/dark)
                red: {
                    DEFAULT: "#E30613",
                },
            },
        },
    },
    plugins: [],
}
