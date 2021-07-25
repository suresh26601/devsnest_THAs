import React,{useContext} from 'react'
import {ContextTwo} from '../App'
export const Home = () => {
    const {Auth,BtnVal,setBtnVal,setAuth} = useContext(ContextTwo)
    console.log("this is the time to get...");
    const HandleLoad=()=>{
        const preBtnVal=BtnVal;
        setTimeout(() => {
            setAuth(!Auth)
            setBtnVal(()=>{
                if (preBtnVal==="Login") return "Logout";
                return "Login";
            })
        }, 3000);
        setBtnVal("Loading...")
    }

    return (
        <div>
            <h1>HOME</h1>
            <br />
            <h3>If not logged in cant access, Profile and Dashboard</h3>
            <br />
            <button onClick={HandleLoad}>
                {BtnVal}
            </button>
        </div>
    )
}
