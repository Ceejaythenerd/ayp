/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: { 50: '#faf5ff', 100: '#f3e8ff', 500: '#a855f7', 600: '#9333ea', 900: '#581c87' },
                orange: { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c' },
                pink: { 50: '#fdf2f8', 100: '#fce7f3', 500: '#ec4899', 600: '#db2777' },
                brand: {
                    navy: '#1A2238',
                    cyan: '#00D1FF',
                    gold: '#FFD700',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                blob: "blob-bounce 10s infinite ease-in-out",
                fadeIn: "fadeIn 0.5s ease-out forwards",
            },
            keyframes: {
                "blob-bounce": {
                    "0%, 100%": { transform: "translateY(0) scale(1)" },
                    "50%": { transform: "translateY(-20px) scale(1.1)" },
                },
                fadeIn: {
                    "from": { opacity: "0", transform: "translateY(10px)" },
                    "to": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
}
