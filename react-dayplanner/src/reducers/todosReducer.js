let initialState = [
        {
            id: 1,
            startTime: 'start',
            endTime: 'end',
            description: 'test todo'
        },
        {
            id: 2,
            startTime: 'start 2',
            endTime: 'end 2',
            description: 'test todo 2'
        }
    ]

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
            break;
        default:
            return state;   
    }
}