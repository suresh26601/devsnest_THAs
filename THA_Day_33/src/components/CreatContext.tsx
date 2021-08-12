import {createContext} from 'react'

export const initialTheme ={
    isDark:false,
    setIsDark:(theme:boolean)=>{}
}
export const themeContext = createContext<typeof initialTheme>(initialTheme)
