import React from 'react';
import Todo from './todo';
import { removeTodo, toggleTodo } from './todoSlice';
import { useDispatch } from 'react-redux';



export default function Todos ({todos}){

    const dispatch = useDispatch()


    // esempio di cattura degli errori in chiamata asincrona
    const onToggle = async (todo) => {
        let newTodo = {...todo, completed: !todo.completed} // esempio per provocare errore
        // let newTodo = {...todo, completed: !todo.completed}
        try {
            const res = dispatch(toggleTodo(newTodo)).unwrap();
            console.log('res: ',res);
        } catch(e){
            console.log();
        }
        
    }
    // throw new Error('error');

    return  <ul className="list-group list-group-flush">
                {todos.map(todo => <Todo todoItem={todo} key={todo.id} toggleTodo={onToggle} removeTodo={() => dispatch(removeTodo(todo))}/>)}
            </ul>
}