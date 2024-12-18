/** @type {import('tailwindcss').Config} */
export default {
    content: ['./frontend/src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                backgroundDark: '#020817',
                backgroundLight: '#D9EAFD',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'), 
    ],
};
