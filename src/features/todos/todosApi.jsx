import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:(builder)=>({
        getAllTodos: builder.query({
            query: () => `todos`
        }),
        getTodoById: builder.query({
            query: (id) => `todos/${id}`,
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE'
              }),
        }),
        updateTodo: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: rest,
              }),
        }),
        AddTodo: builder.mutation({
            query: (body) => ({
                url: `todos`,
                method: 'POST',
                body: body,
              }),
        })
    })
});

export const { 
    useGetAllTodosQuery, 
    useGetTodoByIdQuery, 
    useDeleteTodoMutation, 
    useUpdateTodoMutation,
    useAddTodoMutation 
} = todosApi



