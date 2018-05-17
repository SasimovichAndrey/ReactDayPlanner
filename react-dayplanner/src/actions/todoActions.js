import axios from 'axios'
import * as apiConstants from '../constants/apiConstants'

export function addTodo(newTodo){
    return (dispatch) => {
        axios.post(`${apiConstants.BASE_API_URL}/todos/`, newTodo)
            .then((response) => {
                newTodo.id = response.data.id

                var action = {
                    type: 'ADD_TODO',
                    payload: newTodo
                }

                dispatch(action);
            })
    }
}

export function getTodos(userId){
    return (dispatch, getState) => {
        axios({url: `${apiConstants.BASE_API_URL}/todos/?userId=${userId}`, method: 'GET'})
            .then((response) => {
                var action = {
                    type: 'TODOS_RECEIVED',
                    payload: response.data
                }
                dispatch(action);
            })
    }
}