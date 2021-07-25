import React,{useContext} from 'react'
import {NavLink} from "react-router-dom";
import {ContextOne} from '../App'
export const Navbar = () => {
    const context = useContext(ContextOne)
    return (
     <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to={context?"/profile":"/"}>Profile</NavLink>
         <NavLink to={context?"/dashboard":"/"}>Dashboard</NavLink>
     </nav>
    )
}
