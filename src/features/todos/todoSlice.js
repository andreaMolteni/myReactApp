import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initTodos = [{
        name: 'Studiare React',
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
        id: 1,
        completed: false
    },
    {
        name: 'Studiare Symfony',
        dueDate: new Date().toLocaleDateString(),
        user_id: 2,
        id: 2,
        completed: false
    },
    {
        name: 'Studiare Docker',
        dueDate: new Date().toLocaleDateString(),
        user_id: 3,
        id: 3,
        completed: true
    },
    {
        name: 'Studiare AWS Services',
        dueDate: new Date().toLocaleDateString(),
        user_id: 4,
        id: 4,
        completed: true
    }
];

const TODO_URL = 'http://localhost:4000/todos';
const FILTER_URL = 'http://localhost:4000/filter'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async() => {
    // const response = await client.get(TODO_URL);
    const todoPromise = fetch(TODO_URL).then(res => res.json()).then( res => res );
    const filterPromise = fetch(FILTER_URL).then(res => res.json()).then( res => res );
    // console.log(response);
    let todos;
    let filter;
    // Per parallelizzare le Promise
    [ todos, filter ] = await Promise.all([todoPromise,filterPromise]);
    console.log({todos, filter});
})

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initTodos,
    reducers: {
        addTodo(state, action) {
            return [action.payload, ...state];
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodo(state, action) {
            state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                // state.status = 'loading'
                console.log('loading');
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state = action.payload;
            })
    }
});
console.log({todoSlice})
const { actions, reducer } = todoSlice;
export const { addTodo, removeTodo, toggleTodo } = actions;
export default reducer