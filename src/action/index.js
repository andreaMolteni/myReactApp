export const addTodo = (name,todos) => {
  if (todos.length > 0){
      var newId = todos.map(e => e.user_id).reduce((p, c) => Math.max(p, c)) + 1;
    }
  const newTodo = {
    name,
    dueDate: new Date().toLocaleDateString(),
    user_id: newId,
  };

  return {
    type: "ADD_TODO",
    payload: newTodo
  }
};

export const removeTodo = todo => {
  return {
    type: "REMOVE_TODO",
    payload: todo
  }
};

