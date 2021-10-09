import React from 'react';
import Todo from './todo';

export default function Todos ({todos}){
    return  <ul className="list-group list-group-flush">
                {todos.map(todo => <Todo todoItem={todo} key={todo.user_id}/>)}
            </ul>
}