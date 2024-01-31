import axios from 'axios';

export const $api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = encodeURIComponent('test');
    }

    return config;
});
