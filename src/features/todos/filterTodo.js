import React from 'react';

export default function FilterTodo ({onFilter, filter}){
    console.log({filt: filter});
    return  <div className="row d-flex justify-content-center mt-4">
                <div className="col-auto col-sx-4">
                    <button disabled={filter === 'ALL'} onClick={() => onFilter('ALL')} className={`btn filter-todo ${filter === 'ALL' ? 'btn-info' : 'btn-outline-info'}`}>ALL</button>
                </div>
                <div className="col-auto col-sx-4">
                    <button disabled={filter === 'TODO'} onClick={() => onFilter('TODO')} className={`btn filter-todo ${filter === 'TODO' ? 'btn-info' : 'btn-outline-info'}`}>TO DO</button>
                </div>
                <div className="col-auto col-sx-4">
                    <button disabled={filter === 'COMPLETED'} onClick={() => onFilter('COMPLETED')} className={`btn filter-todo ${filter === 'COMPLETED' ? 'btn-info' : 'btn-outline-info'}`}>COMPLETED</button>
                </div>
            </div>
}