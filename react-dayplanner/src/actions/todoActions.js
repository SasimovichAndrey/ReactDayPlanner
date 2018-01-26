export function addTodo(){
    return {
        type: 'ADD_TODO',
        payload: {
            id: 3,
            startTime: 'start 3',
            endTime: 'end 3',
            description: 'test todo 3'
        }
    }
}