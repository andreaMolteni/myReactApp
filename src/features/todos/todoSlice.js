import { createSlice} from '@reduxjs/toolkit';
import { fetchTodos, removeTodo, toggleTodo, addTodo } from './thunksTodo'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        // addTodo(state, action) {
        //     return [action.payload, ...state];
        // },
        // removeTodo(state, action) {
        //     return state.filter(todo => todo.id !== action.payload.id);
        // },
        // toggleTodo(state, action) {
        //     state.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     })
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                // state.status = 'loading'
                console.log('loading');
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                return state = action.payload;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state = state.filter( e => e.id !== action.payload.id);
                return state;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                return [action.payload, ...state];
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                state.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                });
                return state;
            })
    }
});
// const { actions, reducer } = todoSlice;
const { reducer } = todoSlice;
// export const { addTodo, removeTodo, toggleTodo } = actions;
export default reducer;
export {fetchTodos, removeTodo, addTodo, toggleTodo}