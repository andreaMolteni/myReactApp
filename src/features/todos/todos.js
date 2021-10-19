import React from 'react';
import Todo from './todo';
import { removeTodo, toggleTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

export default function Todos ({todos}){
    const dispatch = useDispatch()
    return  <ul className="list-group list-group-flush">
                {todos.map(todo => <Todo todoItem={todo} key={todo.id} toggleTodo={() => dispatch(toggleTodo(todo))} removeTodo={() => dispatch(removeTodo(todo))}/>)}
            </ul>
}