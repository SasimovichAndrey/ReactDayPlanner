import axios from 'axios'

export function addTodo(newTodo){
    return (dispatch) => {
        axios.post('http://localhost:3001/todos', newTodo)
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

export function getTodos(){
    return (dispatch, getState) => {
        axios.get('http://localhost:3001/todos')
            .then((response) => {
                var action = {
                    type: 'TODOS_RECEIVED',
                    payload: response.data
                }
                dispatch(action);
            })
    }
}