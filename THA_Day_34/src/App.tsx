import { useState } from "react"
import {useSelector,useDispatch} from 'react-redux'
import {insertTodo,deleteTodo} from './Action'
import {rootReducerType} from './Reducer'
export const App = () => {
    const [takeTodo, setTakeTodo] = useState<string>('')
    const dispatch = useDispatch()
    const changeReducer = useSelector((state:rootReducerType) => state.changeReducer)
    const handleAddBtn =()=>{
        if(takeTodo){
            dispatch(insertTodo(new Date().getTime().toString(),takeTodo))
            setTakeTodo('')
        }
    }
    return (
        <main>
            <section>
                <div className="takeTodo">
                    <input type="text" value={takeTodo} onChange={(e)=>setTakeTodo(e.target.value)} />
                    <button onClick={handleAddBtn}>Add Todd</button>
                </div>
                <div className="showTodo">
                    {
                        changeReducer.length>0?(changeReducer.map((todo,ind)=>{
                            return (<div key={todo.id}>
                                <p>{ind}. {todo.task}</p>
                                <button onClick={()=>dispatch(deleteTodo(todo.id ||''))}>Done</button>
                            </div>)
                        })):<h1>add something..</h1>
                    }
                </div>
            </section>
        </main>
    )
}
