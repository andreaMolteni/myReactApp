import React from 'react';
import { removeTodo, toggleTodo } from './todoSlice';
import { useDispatch } from 'react-redux';

export default function Todo ({todoItem}){
    const dispatch = useDispatch()
    const completedCheckbox = todoItem.completed ? <i className="bi-check-square"></i>: <i className="bi-square"></i>;
    return  <li key={todoItem.user_id} className="list-group-item">
                <button onClick={() => dispatch(toggleTodo(todoItem))} className="btn position-absolute top-50 start-0 ms-3 translate-middle-y">{completedCheckbox}</button>
                {todoItem.name}
                <button type="button" onClick={() => dispatch(removeTodo(todoItem))} className="btn btn-outline-danger float-end px-2 py-1">Delete</button>
            </li>
}