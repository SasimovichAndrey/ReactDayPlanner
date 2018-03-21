import { combineReducers } from "redux";
import todosReducer from './reducers/todosReducer'
import userReducer from './reducers/userReducer'

export default combineReducers({
        todos: todosReducer,
        user: userReducer
    });