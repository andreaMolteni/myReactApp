import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TODO_URL } from '../config'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
    reducerPath: 'todos',
    tagTypes: ['TODOS'],
    baseQuery: fetchBaseQuery({
        baseUrl: TODO_URL
    }),
    endpoints: builder => (
        {
            getTodos: builder.query(
                {
                    query: () => '',
                    // providesTags: ['LIST'] // così restituisce tutta la lista 
                    providesTags: (result, error) => {
                        if(error) {
                            return [{type: 'TODOS'}];
                        }
                        return result.map( ele => ({type: 'TODOS', id: ele.id}));
                    }
                }
            ),
            deleteTodo: builder.mutation(
                {
                    query: (id) => ({
                        url: `/${id}`,
                        method: 'DELETE'
                    }),
                    invalidatesTags: ['TODOS'] // invalidiamo tutta la lista
                }
            ),
            addTodo: builder.mutation(
                {
                    query: (list) => ({
                        url: '',
                        method: 'POST',
                        body: list
                    }),
                    invalidatesTags: ['TODOS'] // invalidiamo tutta li lista
                }
            ),
            updateTodo: builder.mutation(
                {
                    query: ({ id, ...body }) => ({
                        url: `/${id}`,
                        method: 'PATCH',
                        body
                    }),
                    invalidatesTags: ['TODOS'] // (result, error, id) => result.map( ele => {type: 'LIST', id: id})
                }
            ),
        }
    ),
})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetTodosQuery,
    useDeleteTodoMutation,
    useAddTodoMutation,
    useUpdateTodoMutation
} = todosApi;

/*


import { TODO_URL, FILTER_URL } from '.././config';
    
export const getTodos = () => {
    return fetch(TODO_URL).then(res => res.json()).then( res => res );
}

export const getFilter = () => {
    return fetch(FILTER_URL).then(res => res.json()).then( res => res );
}

export const changeFilter = filter => {
    console.log('changeFilter: ',filter);
    return fetch(
        FILTER_URL,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type: 'ALL'})
        }
        ).then(res => res.json()).then( res => res );
}

export const removeTodos = todo => {
    return fetch(
        TODO_URL + '/' + todo.id, 
        {
            method: 'DELETE'
        } 
    ).then( res => res.json() ).then( res => res );
}

export const newTodo = todo => {
    return fetch(
        TODO_URL, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        } 
    ).then( res => res.json() ).then( res => res );
}

export const changeCopleted = todo => {
    return fetch(
        TODO_URL + '/' + todo.id, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        } 
    ).then( res => res.json() ).then( res => res );
}*/