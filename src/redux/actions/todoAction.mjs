export const addTodo = (title) => ({
    type: 'ADD_TODO',
    payload: title,
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const editTodo = (id, newTitle) => ({
    type: 'EDIT_TODO',
    payload: { id, newTitle },
  });