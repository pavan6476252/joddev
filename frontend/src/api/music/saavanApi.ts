import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const saavanApi = createApi({
    reducerPath: 'saavanApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://saavan-music-api.vercel.app/'
    }),
    endpoints: (builder) => ({
        getHomeSongs: builder.query({
            query: (args: { title: string, page: number }) => `songs?query=${args.title}&page=${args.page}&limit=10`
        })
    })
})

export const { useGetHomeSongsQuery } = saavanApi;