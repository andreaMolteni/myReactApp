import { createAsyncThunk } from '@reduxjs/toolkit';
import { filterTodo } from './filterSlice';
import { getTodos, getFilter, removeTodos, newTodo, changeCopleted } from '../../service/todoService';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (filter, {dispatch}) => {
    // Per parallelizzare le Promise
    let [ todos] = await Promise.all([ getTodos(), getFilter() ]);
    dispatch(filterTodo(filter));
    todos = todos.filter(todo => { 
        switch (filter) {
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
    return todos;
})

export const removeTodo = createAsyncThunk('todos/removeTodos', async (todo, {dispatch}) => {
  await removeTodos(todo);
  return todo;
})

export const addTodo = createAsyncThunk('todos/addTodos', async (todo, {dispatch}) => {
  return await newTodo(todo);
})

export const toggleTodo = createAsyncThunk('todos/toggle', async (todo, {dispatch}) => {
  return await changeCopleted(todo);
})