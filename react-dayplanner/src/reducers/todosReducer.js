let initialState = []

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TODOS_RECEIVED':
            return action.payload;
        default:
            return state;   
    }
}