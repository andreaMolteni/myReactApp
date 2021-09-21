import React, { useState } from 'react';
import './App.css';


const todosInit = [
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
  const [todos, setTodos] = useState(todosInit)
  return (
    <div className="App container-fluid">
      <h1>MY TODOS LIST:</h1>
      <div className="card todos-cards-wrapper" style={{width: '18rem'}}>
        <div className="card-header">
          TODO:
        </div>
        <ul class="list-group list-group-flush">
          {todos.map(todo => <li className="list-group-item">{todo.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
