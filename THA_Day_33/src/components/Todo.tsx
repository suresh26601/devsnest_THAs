import { TakeTodoInterface } from './TakeTodo'

export const Todo = ({task,id,handleDelete}:{ id: string, task: string, handleDelete: (id: string) => void }) => {
    return (
        <div className="todo" ><h5 >{task}</h5> <button onClick={()=>handleDelete(id)}>Delete</button></div>

    )
}
