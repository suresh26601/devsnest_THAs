import React,{useState} from 'react'

const Btn = () => {
    const [num, setNum] = useState(0)
    return <button className="btn" onClick={()=>{setNum(num+1)}} value={num}>{num}</button>;
}

export default Btn
