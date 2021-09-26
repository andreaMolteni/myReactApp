import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const initTodos = [
  {
    name: 'Studiare React',
    dueDate: new Date().toLocaleDateString(),
    user_id: 1,
  },
  {
    name: 'Studiare Symfony',
    dueDate: new Date().toLocaleDateString(),
    user_id: 2,
  },
  {
    name: 'Studiare Docker',
    dueDate: new Date().toLocaleDateString(),
    user_id: 3,
  },
  {
    name: 'Studiare AWS Services',
    dueDate: new Date().toLocaleDateString(),
    user_id: 4,
  }
]

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initTodos)
    return () => {
      // cleanup
    }
  }, []);

  const todoEl = useRef('');

  const addTodo = (e) => {
    e.preventDefault();
    const newId = todos.map(e => e.user_id).reduce((p, c) => Math.max(p, c)) + 1;
    const newTodo = {
      name: todoEl.current.value,
      dueDate: new Date().toLocaleDateString(),
      user_id: newId,
    };

    setTodos([
      newTodo,
      ...todos
    ]);

    todoEl.current.value = '';
  };

  return (
    <div className="App container-fluid">
      <div className="row d-flex justify-content-center  text-center">
        <h1>MY TODOS LIST:</h1>
        <form>
        <div className="row d-flex justify-content-center  text-center">
          <div className="col-md-6">
            <div className="form-groupd d-flex m-1">
              <label htmlFor="todo" className="form-label">Insert a new todo</label>
              <input ref={todoEl} className="form-control m-1" name="todo" id="todo" />
              <button onClick={addTodo} className="btn  btn-primary m-1">ADD</button>
            </div>
          </div>
        </div>
        </form>
        <div className="col-md-6">
          <div className="card todos-cards-wrapper text-center">
            <div className="card-header">
              TODO:
            </div>
            <ul className="list-group list-group-flush">
              {todos.map(todo => { console.log(todos); return <li key={todo.name} className="list-group-item">{todo.name}</li> })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
