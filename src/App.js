import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos  } from './features/todos/todoSlice';
import { filterTodo } from './features/todos/filterSlice';
import Todos from './features/todos/todos';
import ErrorBoundary from './components/ErrorBoundary';
import FilterTodos from './features/todos/filterTodo';
import AddTodoForm from './features/todos/addTodoForm';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {  // dispatch è tra le prorprietà del componente App
  const filter = useSelector(state => state.filter);
  let todos = useSelector(state => state.todos);
  // const todos = [];
  const dispatch = useDispatch()
  useEffect(() => {
    // Con l'unwrap è possibile avere accesso alla Promise per poi risolverla con il .them e raccogliere eventualmente l'errore nel catch
    dispatch(fetchTodos(filter)).unwrap().then( res => {
    }).catch( error => {
      console.log({error: error.message});
    });
    return () => {
    }
  }, [dispatch, filter])
  
  

  // const [todos, setTodos] = useState([]);
  const manageAddTodoClick = (e) => {
    e.preventDefault();
    var newId = todos.map(e => e.user_id).reduce((p, c) => Math.max(p, c)) + 1;
    const newTodo = {
      name: todoEl.current.value,
      dueDate: new Date().toLocaleDateString(),
      user_id: newId,
    };
    dispatch(addTodo(newTodo, todos));
    todoEl.current.value = '';
  }

  const onFilterTodo = (filter) => {
    dispatch(filterTodo(filter));
  }
  // useEffect(() => {
  //   setTodos(initTodos)
  //   return () => {
  //     // cleanup
  //   }
  // }, []);

  const todoEl = useRef('');

  return (
    <div className="App container-fluid">
      <div className="row d-flex justify-content-center  text-center">
        <h1>MY "TO DO" LIST:</h1>
        <AddTodoForm todoEl={todoEl} manageAddTodoClick={manageAddTodoClick}/>
        {/* <form>
          <div className="row d-flex justify-content-center  text-center">
            <div className="col-md-6">
              <div className="form-groupd d-flex m-1">
                <label htmlFor="todo" className="form-label">Insert a new todo</label>
                <input ref={todoEl} className="form-control m-1" name="todo" id="todo" />
                <button onClick={manageAddTodoClick} className="btn  btn-primary m-1">ADD</button>
              </div>
            </div>
          </div>
        </form> */}
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
      </div>
    </div>
  );
}


// Vecchio codice
// // Connettiamo il componente App alla store
// const matchStateToProps = (state) => {
//   return {todos: [...state]};
// }

// // const mapDispatchToProps = (dispatch) => {
// //   return ({
// //     addTodo: (name,todos) => dispatch(addTodo(name,todos)),
// //     removeTodo: (todo) => dispatch(removeTodo(todo))
// //   })
// // }
// // const createConnector = connect(matchStateToProps, mapDispatchToProps);
// const createConnector = connect(matchStateToProps, {addTodo, removeTodo});
// export default createConnector(App);
export default App;
