import initialState from "./todoData.mjs";


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const newTodo = {
          id: Date.now(),
          title: action.payload,
          completed: false,
        };
        return [newTodo, ...state];
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.payload);
      case 'EDIT_TODO':
        return state.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.newTitle }
            : todo
        );
      default:
        return state;
    }
  };
  
  export default todoReducer;