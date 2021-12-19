import React from 'react';
import MyLists from './features/lists/myLists';
import Header from './components/Header';
import MyTodos from './features/todos/myTodos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {  // dispatch è tra le prorprietà del componente App
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App container-fluid">
          <div className="row d-flex justify-content-center  text-center">
            <Routes>
              <Route path="/todos" element={
                <MyTodos/>
              }
              />
              <Route exact path="/lists" element={<MyLists/>} />
              <Route path="/" element={<MyLists/>} />
              <Route path="/home" element={<MyLists/>} />
              {/* <Route path="/" element={<Navigate replace to="/lists" />} />
              <Route path="/home" element={<Navigate replace to="/lists" />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
