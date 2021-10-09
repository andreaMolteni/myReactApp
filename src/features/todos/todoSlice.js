import { createSlice } from '@reduxjs/toolkit';


const initTodos = [
    {
      name: 'Studiare React',
      dueDate: new Date().toLocaleDateString(),
      user_id: 1,
      completed: false
    },
    {
      name: 'Studiare Symfony',
      dueDate: new Date().toLocaleDateString(),
      user_id: 2,
      completed: false
    },
    {
      name: 'Studiare Docker',
      dueDate: new Date().toLocaleDateString(),
      user_id: 3,
      completed: true
    },
    {
      name: 'Studiare AWS Services',
      dueDate: new Date().toLocaleDateString(),
      user_id: 4,
      completed: true
    }
  ];


export const todoSlice = createSlice(
    {
        name: 'todos',
        initialState: initTodos,
        reducers: {
            addTodo(state, action){
              console.log('reducer',{state, action})
              return [action.payload, ...state];
            },
            removeTodo(state, action){
              return state.filter(todo => todo.user_id !== action.payload.user_id);
            },
            toggleTodo(state, action){
              console.log(action.payload);
              state.map( todo => {
                if (todo.user_id === action.payload.user_id){
                  todo.completed = !todo.completed;
                }
                return todo;
              })
            }
        }
    }

);
console.log(todoSlice)
const {actions, reducer } = todoSlice;
export const {addTodo, removeTodo,toggleTodo } = actions;
export default reducer