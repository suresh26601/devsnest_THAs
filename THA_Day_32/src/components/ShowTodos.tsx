import {TakeTodoInterface} from './TakeTodo'
import {useContext} from 'react'
import {themeContext,initialTheme} from './CreatContext'
export const ShowTodos = ({allTodos}:{allTodos:TakeTodoInterface[]}) => {
    const {isDark} = useContext<typeof initialTheme>(themeContext)
    return (
        <div className="showTodos" style={isDark?{color:"black",backgroundColor:"white"}:{color:"white",backgroundColor:"black"}}>
            {
                allTodos.map((todo,id)=>{
                    return <div className="todo" key={todo.id}> <h5 >({id}) {todo.task}</h5></div>
                })
            }
        </div>
    )
}
