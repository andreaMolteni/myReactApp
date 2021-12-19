import React, {useEffect} from 'react';
import Todo from './todo';
import { useGetTodosQuery, useDeleteTodoMutation, useUpdateTodoMutation } from '../../service/todoService';

export default function Todos({filter}) {


    const {
        // data: todos = [],
        data = [],
        error,
        // refetch: reloadTodos, // (direttamente nei tag della query)
        isFetching 
    } = useGetTodosQuery();
 
    const todos = data.filter(todo => { 
        console.log('1 ', filter)
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

    const [removeTodo, {
        isLoading: isDeleting,
        isSuccess: isDeleted,
        error: deleteError,
    }] = useDeleteTodoMutation();

    const [updateTodo, {
        isLoading: isChangeCompletedLoading,
        isSuccess: isChangeCompleted,
        error: changeCompletedError,
    }] = useUpdateTodoMutation();

    useEffect(() => {
        if (isFetching) { console.log('The todos are fetching...'); }
        if (error) { console.log(error); }
        if (isDeleting) { console.log('todo is deleting...'); }
        if (isDeleted) { console.log('Todo is deleted...'); }
        if (deleteError) { console.log(deleteError); }
        if (isChangeCompletedLoading) { console.log('todo check completed changing...'); }
        if (isChangeCompleted) { console.log('Todo check completed is changed...'); }
        if (changeCompletedError) { console.log(changeCompletedError); }
    }, [isFetching, error, isDeleting, isDeleted, deleteError, isChangeCompletedLoading, isChangeCompleted, changeCompletedError])

    // esempio di cattura degli errori in chiamata asincrona
    const onToggle = (todo) => {
        let newTodo = { ...todo, completed: !todo.completed } // esempio per provocare errore
        // let newTodo = {...todo, completed: !todo.completed}
        try {
            const res = updateTodo(newTodo).unwrap();
            console.log('res: ', res);
        } catch (e) {
            console.log();
        }

    }

    const manageTodoRemotion = id => {
        removeTodo(id).unwrap().then(() => {
        }).catch(err => {
            console.log(err.message)
        })
    }

    return <ul className="list-group list-group-flush">
        {todos.map(todo => <Todo
            todoItem={todo}
            key={todo.id}
            toggleTodo={onToggle}
            onRemoveTodo={id => {manageTodoRemotion(id)}}
        />)}
    </ul>
}