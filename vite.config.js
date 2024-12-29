import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/backend': {
                target: 'http://127.0.0.1:5000', // Use IPv4 address explicitly
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/backend/, ''),
            },
        },
    },
});
