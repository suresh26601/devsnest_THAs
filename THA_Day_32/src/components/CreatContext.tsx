import {createContext} from 'react'

export const initialTheme ={
    isDark:true,
    setIsDark:(theme:boolean)=>{}
}
export const themeContext = createContext<typeof initialTheme>(initialTheme)
