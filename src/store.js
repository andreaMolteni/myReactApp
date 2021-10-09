import {createStore} from 'redux';


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

/**
* definisco un reducer 
*/ 
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [action.payload, ...state];
          case "REMOVE_TODO":
            return state.filter( t => t.user_id !== action.payload.user_id);
        default:
            return state;
    } 
}

export const store = createStore(reducer, initTodos,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

