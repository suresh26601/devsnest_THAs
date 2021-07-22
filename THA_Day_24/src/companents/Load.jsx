import React,{useState,useEffect} from 'react'

export const Load = () => {
    const [load, setLoad] = useState(false)
    const HandleLoad=()=>{
        setLoad(true);
        setTimeout(() => {
            setLoad(false)
        }, 3000);
    }

    if (load){
        return (
            <p>login...</p>
        )
    }
    return (
        <div>
            <button onClick={HandleLoad}>
                Log In
            </button>
        </div>
    )
}