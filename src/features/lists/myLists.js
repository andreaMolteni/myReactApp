import React, {useEffect, useRef} from 'react';
import Lists from "./Lists";
import AddListForm from '../../components/addElementForm';
import { useAddListMutation } from '../../service/listService';

export default function MyLists() {
    const listEl = useRef('');
    const [addList, {
        isLoading: isAdding,
        isSuccess: isAddSuccesess,
        error: addError,
        isAddError
    }] = useAddListMutation();

    const manageClick = e => {
        e.preventDefault();
        addList({name: listEl.current.value, user_id:1});
        listEl.current.value = '';
    }

    useEffect(() => {
        if (isAddSuccesess) {
            listEl.current.value = '';
        }
    }, [isAddSuccesess])

    return <>
        <h1>MY "TO DO" LISTS:</h1>
        <AddListForm
            Ele={listEl}
            manageClick={manageClick}
            txtLabel={'Insert a new list'}
            txtButton={'Add List'}
        />
        <div className="col-md-6">
            <div className="card todos-cards-wrapper text-center">
                <div className="card-header">
                    TO DO:
                </div>
                {/* <ErrorBoundary> */}
                <Lists />
                {/* </ErrorBoundary> */}
                {/* <FilterTodos onFilter={onFilterTodo} filter={filter} />  */}
            </div>
        </div>
    </>
}