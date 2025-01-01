import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/backend': {
                target: 'https://backend-6az5.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/backend/, ''),
            },
        },
    },
});
