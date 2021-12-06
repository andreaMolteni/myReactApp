import React from 'react';
import Lists from "./Lists";

export default function MyLists() {
    return <>
        <h1>MY "TO DO" LISTS:</h1>
        {/* <AddTodoForm todoEl={todoEl} manageAddTodoClick={manageAddTodoClick} /> */}
        <div className="col-md-6">
            <div className="card todos-cards-wrapper text-center">
                <div className="card-header">
                    TO DO:
                </div>
                {/* <ErrorBoundary> */}
                <Lists/>
                {/* </ErrorBoundary> */}
                {/* <FilterTodos onFilter={onFilterTodo} filter={filter} />  */}
            </div>
        </div>
    </>
}