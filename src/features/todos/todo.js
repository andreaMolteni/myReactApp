import React from 'react';

export default function Todo ({todoItem, removeTodo, toggleTodo}){
    const completedCheckbox = todoItem.completed ? <i className="bi-check-square"></i>: <i className="bi-square"></i>;
    return  <li className="list-group-item">
                <button onClick={() => toggleTodo(todoItem)} className="btn position-absolute top-50 start-0 ms-3 translate-middle-y">{completedCheckbox}</button>
                {todoItem.name}
                <button type="button" onClick={() => removeTodo(todoItem)} className="btn btn-outline-danger float-end px-2 py-1">Delete</button>
            </li>
}