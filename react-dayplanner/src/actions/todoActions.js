import axios from 'axios'

//var baseApiUrl = 'http://localhost:3001'
var baseApiUrl = 'http://localhost:55334/api'

export function addTodo(newTodo){
    return (dispatch) => {
        axios.post(`${baseApiUrl}/todos/`, newTodo)
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
        axios.get(`${baseApiUrl}/todos?userId=${userId}`)
            .then((response) => {
                var action = {
                    type: 'TODOS_RECEIVED',
                    payload: response.data
                }
                dispatch(action);
            })
    }
}