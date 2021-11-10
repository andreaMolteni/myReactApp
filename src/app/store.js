import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice';
import filterReducer from '../features/todos/filterSlice';

// const myLog = store => {
//   // nextMiddleware è il prossimo middleware
//   return myDispatch(nextMiddleware) {
//     return myAction(action) {

//     }
//   }
// }
//la riscrivo con meno codice
const myLog = store => nextMiddleware => action => {
  // store.dispatch({type: 'INIT_MYLOG', payload: null});
  /* console.log({
     actionType: action.type,
     actionPayload: action.payload
   });*/
  return nextMiddleware(action);
}

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog)
});
