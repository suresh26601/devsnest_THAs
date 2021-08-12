import { useState } from "react"

export const App = () => {
    const [takeTodo, setTakeTodo] = useState<string>('')
    const handleAddBtn =()=>{
        if(takeTodo){

        }
    }
    return (
        <main>
            <section>
                <div className="takeTodo">
                    <input type="text" value={takeTodo} onChange={(e)=>setTakeTodo(e.target.value)} />
                    <button onClick={()=>handleAddBtn}>Add Todd</button>
                </div>
                <div className="showTodo">
                    
                </div>
            </section>
        </main>
    )
}
