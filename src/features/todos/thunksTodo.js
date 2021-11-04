import { createAsyncThunk } from '@reduxjs/toolkit';
import { filterTodo } from './filterSlice';
import { getTodos, getFilter, removeTodos, newTodo, changeCopleted } from '../../service/todoService';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (data = null, {dispatch}) => {
    // Per parallelizzare le Promise
    let [ todos, filter ] = await Promise.all([ getTodos(), getFilter() ]);
    dispatch(filterTodo(filter[0]));
    todos = todos.filter(todo => {
        switch (filter[0]) {
          case 'ALL':
            return true;
          case 'COMPLETED':
            return todo.completed;
          case 'TODO':
            return !todo.completed;
          default:
            return true;
        }
      })
    console.log({todos, filter});
    return todos;
})

export const removeTodo = createAsyncThunk('todos/removeTodos', async (todo, {dispatch}) => {
  let res = await removeTodos(todo);
  return todo;
})

export const addTodo = createAsyncThunk('todos/addTodos', async (todo, {dispatch}) => {
  return await newTodo(todo);
})

export const toggleTodo = createAsyncThunk('todos/toggle', async (todo, {dispatch}) => {
  return await changeCopleted(todo);
})