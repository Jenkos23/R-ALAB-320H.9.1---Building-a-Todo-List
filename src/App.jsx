import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from './redux/actions/todoAction.mjs';

import './App.css'

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleEditTodo = (id, currentTitle) => {
    setEditing(id);
    setEditedText(currentTitle);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo(id, editedText));
    setEditing(null);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };


  return (
    <>
       <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editing === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span>{todo.title}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  disabled={!todo.completed}
                >
                  Delete
                </button>
                <button onClick={() => handleEditTodo(todo.id, todo.title)}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
