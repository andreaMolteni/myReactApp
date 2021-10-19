import React from 'react';

export default function addTodoForm ({manageAddTodoClick, todoEl}){
    return  (<form onSubmit={manageAddTodoClick}>
                <div className="row d-flex justify-content-center  text-center">
                    <div className="col-md-6">
                        <div className="form-groupd d-flex m-1">
                            <label htmlFor="todo" className="form-label">Insert a new todo</label>
                            <input ref={todoEl} className="form-control m-1" name="todo" id="todo" />
                            <button className="btn  btn-primary m-1">ADD</button>
                        </div>
                    </div>
                </div>
            </form>)
}