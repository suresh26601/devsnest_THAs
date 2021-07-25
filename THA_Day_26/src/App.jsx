import React from 'react'
// import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
export const App = () => {
    const myState = useSelector(state => state.changeInpValue)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log(myState);
    // }, [myState])
    return (
        <div style={{textAlign:"center"}}>
            <br />
           First Name: <input type="text" onChange={(e)=>dispatch({type:"FIRST",payload:e.target.value})} />
           <br /><br />
           Last Name: <input type="text" onChange={(e)=>dispatch({type:"LAST",payload:e.target.value})} />
           <br /><br />
           <div>
               <p>firstName:{myState.firstName}</p>
               <p>lastName:{myState.lastName}</p>
           </div>
        </div>

    )
}
