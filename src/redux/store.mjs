import {createStore} from 'redux';
import todoReducer from './reducers/todoReducers.mjs';


const store = createStore(todoReducer);


export default store;