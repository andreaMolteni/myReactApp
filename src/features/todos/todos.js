import React from 'react';
import Todo from './todo';
import { removeTodo, toggleTodo } from './todoSlice';
import { useDispatch } from 'react-redux';



export default function Todos ({todos}){

    const dispatch = useDispatch()

    const onToggle = (todo) => {
        let newTodo = {...todo, completed: !todo.completed}
        dispatch(toggleTodo(newTodo));
    }
    
    return  <ul className="list-group list-group-flush">
                {todos.map(todo => <Todo todoItem={todo} key={todo.id} toggleTodo={onToggle} removeTodo={() => dispatch(removeTodo(todo))}/>)}
            </ul>
}