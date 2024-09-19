/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                fadeIn: 'fadeIn 2s ease-in-out',
                slideInLeft: 'slideInLeft 1.5s ease-out',
                slideInRight: 'slideInRight 1.5s ease-out',
                fadeInLeft: 'fadeInLeft 1.5s ease-out',
                fadeInRight: 'fadeInRight 1.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                fadeInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                  },
                  fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                  },
            },
        },
    },
    plugins: [],
};
