let initialState = {
    isLogged: false,
    isUserLoading: false,
    user: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'USER_RECEIVED':
            return Object.assign({}, state, { user: action.payload, isLogged: true, isUserLoading: false} )
        case 'USER_LOAD_FAILED':
            return Object.assign({}, state, { isLogged: false, isUserLoading: false} )

        case 'USER_LOGGED_IN':
            return Object.assign({}, state, { isLogged: true} )
        case 'USER_LOADING':
            return Object.assign({}, state, {isUserLoading: true})
    }

    return state;
}