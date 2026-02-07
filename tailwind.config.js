/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Color Palette from Style Guide
                brand: {
                    // Deep Navy - The Foundation
                    // Represents authority, intelligence, stability, and trust
                    navy: '#1A2238',

                    // Electric Cyan - The Connector
                    // Represents technology, communication, clarity, and the future
                    cyan: '#00D1FF',

                    // Optimistic Yellow - The Spirit
                    // Represents youth, happiness, intellect, and positivity
                    gold: '#FFD700',

                    // Vibrant Orange - The Energy
                    // Represents creativity, determination, and enthusiasm
                    orange: '#FF9F1C',
                },
                // Supporting colors
                purple: { 50: '#faf5ff', 100: '#f3e8ff', 500: '#a855f7', 600: '#9333ea', 900: '#581c87' },
                orange: { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c' },
                pink: { 50: '#fdf2f8', 100: '#fce7f3', 500: '#ec4899', 600: '#db2777' },
            },
            fontFamily: {
                // Primary: Arial Bold - Geometric, Modern (Headlines & Navigation)
                sans: ['Arial', 'Roboto', 'sans-serif'],
                // Secondary: Roboto - Legible, Digital-native (Articles & Long-form)
                body: ['Roboto', 'Arial', 'sans-serif'],
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
            animationDelay: {
                '2000': '2s',
                '4000': '4s',
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const delays = theme('animationDelay');
            const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
                acc[`.animation-delay-${key}`] = { 'animation-delay': value };
                return acc;
            }, {});
            addUtilities(utilities);
        },
    ],
}
