import scrollbarPlugin from 'tailwind-scrollbar';
export default {
    content: ['src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                backgroundDark: '#020817',
                backgroundLight: '#9fc8f5',
            },
        },
    },
    plugins: [scrollbarPlugin],
};
