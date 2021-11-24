import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from './features/todos/todoSlice';
import { filterTodo } from './features/todos/filterSlice';
import MyLists from './features/lists/myLists';
import Header from './components/Header';
import MyTodos from './features/todos/myTodos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useGetListsQuery } from './service/listService';
import './App.css';

function App() {  // dispatch è tra le prorprietà del componente App
  const filter = useSelector(state => state.filter);
  let todos = useSelector(state => state.todos);

  // const lists = [
  //   {
  //     "name": "work",
  //     "created_at": "2021-11-17 23:45",
  //     "user_id": 1,
  //     "id": 0
  //   },
  //   {
  //     "name": "home",
  //     "created_at": "2021-11-17 23:45",
  //     "user_id": 1,
  //     "id": 1
  //   }
  // ]

  // const todos = [];
  const dispatch = useDispatch()

  // const {data:lists = [], error, isLoading} = useGetList();
  const {data: lists = [], error, isLoading} = useGetListsQuery();


  useEffect(() => {
    if(error){
      console.log(error);
    }
  
    if(isLoading){
      console.log(isLoading);
    }
    // Con l'unwrap è possibile avere accesso alla Promise per poi risolverla con il .them e raccogliere eventualmente l'errore nel catch
    dispatch(fetchTodos(filter)).unwrap().then(res => {
    }).catch(error => {
      console.log({ error: error.message });
    });
    return () => {
    }
  }, [dispatch, filter, error, isLoading])



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
    <>
      <BrowserRouter>
        <Header />
        <div className="App container-fluid">
          <div className="row d-flex justify-content-center  text-center">
            <Routes>
              <Route path="/todos" element={
                <MyTodos
                  todoEl={todoEl}
                  manageAddTodoClick={manageAddTodoClick}
                  todos={todos}
                  onFilter={onFilterTodo}
                  filter={filter}
                />
              }
              />
              <Route exact path="/lists" element={<MyLists lists={lists} />} />
              <Route path="/" element={<MyLists lists={lists}/>} />
              <Route path="/home" element={<MyLists lists={lists}/>} />
              {/* <Route path="/" element={<Navigate replace to="/lists" />} />
              <Route path="/home" element={<Navigate replace to="/lists" />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
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
