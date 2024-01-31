import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders(headers) {
            const token = encodeURIComponent('test');

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        }
    }),

    endpoints: (builder) => ({})
});
