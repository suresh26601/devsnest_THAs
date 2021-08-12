import {PropsInterface} from './TakeTodo'
import {useContext} from 'react'
import {Todo} from './Todo'
import {themeContext,initialTheme} from './CreatContext'
export const ShowTodos = ({allTodos,setAllTodos}:PropsInterface) => {
    const {isDark} = useContext<typeof initialTheme>(themeContext)
      const handleDelete =(id:string):void=>{
        setAllTodos(preTodos=>preTodos.filter((todo)=>todo.id!==id))
    }
    return (
        <div className="showTodos" style={isDark?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>
            {
                allTodos.map((todo,id)=>{
                    return <Todo key={todo.id} handleDelete={handleDelete} {...todo} />
                })
            }
        </div>
    )
}
