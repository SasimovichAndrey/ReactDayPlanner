let initialState = []

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
            break;
        case 'TODOS_RECEIVED':
            return action.payload;
            break;
        default:
            return state;   
    }
}