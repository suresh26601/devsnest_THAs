import {useState,useEffect} from 'react'
import { ShowTodos } from './components/ShowTodos'
import {TakeTodo,TakeTodoInterface} from './components/TakeTodo'
import {themeContext} from './components/CreatContext'
import './App.css'
export const App = () => {
    const [allTodos, setAllTodos] = useState<TakeTodoInterface[]>([])
    const [isDark, setIsDark] = useState<boolean>(false)
    return (
            <main>
       <themeContext.Provider value={{isDark,setIsDark}}>
            <TakeTodo allTodos={allTodos} setAllTodos={setAllTodos}/>
            <ShowTodos allTodos={allTodos}/>
       </themeContext.Provider>
       <button className="mode" onClick={()=>setIsDark(!isDark)}>{isDark?"Dark":"Light"}</button>
        </main>
    )
}
