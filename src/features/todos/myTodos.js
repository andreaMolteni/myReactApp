import React, {useEffect, useRef} from 'react';
import Todos from '../../features/todos/todos';
import ErrorBoundary from '../../components/ErrorBoundary';
import FilterTodos from '../../features/todos/filterTodo';
import AddTodoForm from '../../components/addElementForm';
import { useAddTodoMutation } from '../../service/todoService';
import { filterTodo } from './filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MyTodos() {

    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch()

    const onFilterTodo = (filter) => {
        dispatch(filterTodo(filter));
    }

    const todoEl = useRef('');

    const [addTodo, {
        isLoading: isAdding,
        isSuccess: isAddSuccesess,
        error: addError,
    }] = useAddTodoMutation();

    const manageClick = e => {
        e.preventDefault();
        addTodo({
            name: todoEl.current.value, 
            user_id:1
        });
    }

    useEffect(() => {
        if (isAddSuccesess) {
            console.log('todo is added...');
            todoEl.current.value = '';
        }
        if (isAdding) {
            console.log('is adding a todo...');
        }
        if (addError) {
            console.log(addError);
        }
    }, [isAddSuccesess, isAdding, addError])

    return <>
        <h1>MY "TO DO" LIST:</h1>
        <AddTodoForm
            Ele={todoEl}
            manageClick={manageClick}
            txtLabel={'Insert a new "todo"'}
            txtButton={'Add To do'}
        />
        <div className="col-md-6">
            <div className="card todos-cards-wrapper text-center">
                <div className="card-header">
                    TO DO:
                </div>
                <ErrorBoundary>
                    <Todos filter={filter}/>
                </ErrorBoundary>
                <FilterTodos onFilter={onFilterTodo} filter={filter} />
            </div>
        </div>
    </>
}
