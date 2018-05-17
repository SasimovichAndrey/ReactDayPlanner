import axios from 'axios'
import * as apiConstants from '../constants/apiConstants'
import qs from 'qs'

export function getUser(userId){
    return (dispatch, getState) => {
        dispatch({
            type: 'USER_LOADING'
        })
        axios({ url: `${apiConstants.BASE_API_URL}/account/UserInfo`, method: 'GET'})
            .then((response) => {
                var action = {
                    type: 'USER_RECEIVED',
                    payload: response.data
                }
                dispatch(action);
            })
            .catch((error) => {
                if(error.response.status == 401){
                    var action = {
                        type: 'USER_LOAD_FAILED'
                    }
                    dispatch(action)
                }
            })
    }
}

export function login(email, pass){
    return (dispatch, getState) => {
        axios.post(`${apiConstants.TOKEN_URL}`, qs.stringify({grant_type: "password", username: email, password: pass}), {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})
            .then((response) => {
                localStorage.setItem('authToken', response.data.access_token);
                
                var action = {
                    type: 'USER_LOGGED_IN',
                    payload: response.data
                }
                dispatch(action);
            })
    }
}