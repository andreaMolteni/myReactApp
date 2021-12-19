import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LIST_URL } from '../config'

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
    reducerPath: 'lists',
    tagTypes: ['LIST'],
    baseQuery: fetchBaseQuery({
        baseUrl: LIST_URL
    }),
    endpoints: builder => (
        {
            getLists: builder.query(
                {
                    query: () => '',
                    // providesTags: ['LIST'] // così restituisce tutta la lista 
                    providesTags: (result, error) => {
                        if(error) {
                            return [{type: 'LIST'}];
                        }
                        return result.map( ele => ({type: 'LIST', id: ele.id}));
                    }
                }
            ),
            deleteList: builder.mutation(
                {
                    query: (id) => ({
                        url: `/${id}`,
                        method: 'DELETE'
                    }),
                    invalidatesTags: ['LIST'] // invalidiamo tutta la lista
                }
            ),
            addList: builder.mutation(
                {
                    query: (list) => ({
                        url: '',
                        method: 'POST',
                        body: list
                    }),
                    invalidatesTags: ['LIST'] // invalidiamo tutta li lista
                }
            ),
            updateList: builder.mutation(
                {
                    query: ({ id, ...body }) => ({
                        url: `/${id}`,
                        method: 'PATCH',
                        body
                    }),
                    invalidatesTags: ['LIST'] // (result, error, id) => result.map( ele => {type: 'LIST', id: id})
                }
            ),
        }
    ),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetListsQuery,
    useDeleteListMutation,
    useAddListMutation,
    useUpdateListMutation
} = listsApi;