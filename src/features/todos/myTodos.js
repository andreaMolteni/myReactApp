import React from 'react';
import Todos from '../../features/todos/todos';
import ErrorBoundary from '../../components/ErrorBoundary';
import FilterTodos from '../../features/todos/filterTodo';
import AddTodoForm from '../../features/todos/addTodoForm';

export default function MyTodos({todoEl,manageAddTodoClick,todos,onFilterTodo,filter}){
    return <>
        <h1>MY "TO DO" LIST:</h1>
        <AddTodoForm todoEl={todoEl} manageAddTodoClick={manageAddTodoClick} />
        <div className="col-md-6">
            <div className="card todos-cards-wrapper text-center">
                <div className="card-header">
                    TO DO:
                </div>
                <ErrorBoundary>
                    <Todos todos={todos} />
                </ErrorBoundary>
                <FilterTodos onFilter={onFilterTodo} filter={filter} /> 
            </div>
        </div>
    </>
}
