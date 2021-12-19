import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/todos/filterSlice';
import { listsApi } from '../service/listService';
import { todosApi } from '../service/todoService';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
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
    //todos: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    filter: filterReducer,
    // lists: listsApi.reducer
    [listsApi.reducerPath]: listsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog, listsApi.middleware, todosApi.middleware)
});
