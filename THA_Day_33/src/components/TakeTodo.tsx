import {useState} from 'react'
export interface TakeTodoInterface{
    id:string,
    task:string
}
export interface PropsInterface {
    allTodos:TakeTodoInterface[],
    setAllTodos:React.Dispatch<React.SetStateAction<TakeTodoInterface[]>>
}
export const TakeTodo = ({allTodos,setAllTodos}:PropsInterface) => {
    const [TakeTodoVal, setTakeTodoVal] = useState<string>('')
    const handleBtn =()=>{
        if (TakeTodoVal){
            const newTodo ={id:new Date().getTime().toString(),task:TakeTodoVal}
            setAllTodos([...allTodos,newTodo])
            setTakeTodoVal('')
        }
    }
    return (
        <div className="takeTodo">
            <input type="text" value={TakeTodoVal} onChange={(e)=>setTakeTodoVal(e.target.value)}/>
            <button onClick={()=>handleBtn()}>Add Todo</button>
        </div>
    )
}
