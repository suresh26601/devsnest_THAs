import React from 'react'

export const Home = ({setAuth,Auth,BtnVal,setBtnVal}) => {
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
