import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIURL } from '../config'

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
    reducerPath: 'lists',
    baseQuery: fetchBaseQuery({
        baseUrl: APIURL
    }),
    endpoints: builder => (
        {
            getLists: builder.query(
                {
                    query: () => `lists`,
                }
            ),
        }
    ),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListsQuery } = listsApi;