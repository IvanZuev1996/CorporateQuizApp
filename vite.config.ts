import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }]
    },
    define: {
        'import.meta.env.ENV_VARIABLE': JSON.stringify(process.env.ENV_VARIABLE)
    }
});
