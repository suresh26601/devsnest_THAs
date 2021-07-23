import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = ({Auth}) => {
    return (
     <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to={Auth?"/profile":"/"}>Profile</NavLink>
         <NavLink to={Auth?"/dashboard":"/"}>Dashboard</NavLink>
     </nav>
    )
}
