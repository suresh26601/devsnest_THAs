import {actionDeleteInterface,actionInsertInterface} from '../Reducer/main'

export const insertTodo=(ID:string,TASK:string):actionInsertInterface =>{
    return {
        type: 'INSERT',
        payload: {id:ID,task:TASK}
    }
}
export const deleteTodo=(ID:string):actionDeleteInterface=>{
    return{
        type:'DELETE',
        payload: ID
    }
}