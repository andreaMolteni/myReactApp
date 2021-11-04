import { TODO_URL, FILTER_URL } from '.././config';
    
export const getTodos = () => {
    return fetch(TODO_URL).then(res => res.json()).then( res => res );
}

export const getFilter = () => {
    return fetch(FILTER_URL).then(res => res.json()).then( res => res );
}

export const removeTodos = (todo) => {
    return fetch(
        TODO_URL + '/' + todo.id, 
        {
            method: 'DELETE'
        } 
    ).then( res => res.json() ).then( res => res );
}

export const newTodo = (todo) => {
    return fetch(
        TODO_URL, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        } 
    ).then( res => res.json() ).then( res => res );
}

export const changeCopleted = (todo) => {
    return fetch(
        TODO_URL + '/' + todo.id, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        } 
    ).then( res => res.json() ).then( res => res );
}