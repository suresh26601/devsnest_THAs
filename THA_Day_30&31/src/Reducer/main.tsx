export interface todoInterface{
    id?:string,
    task?:string,
}
export interface actionInsertInterface{
    type: 'INSERT',
    payload:todoInterface
}
export interface actionDeleteInterface{
    type: 'DELETE',
    payload:string
}
const initialValue: todoInterface[]=[]

export const changeReducer=(state=initialValue,action:actionDeleteInterface|actionInsertInterface):todoInterface[]=>{
    switch (action.type) {
        case 'INSERT': return [...state,action.payload];
        case 'DELETE': return state.filter((todo)=>todo.id!== action.payload);
        default:return state;
    }
}