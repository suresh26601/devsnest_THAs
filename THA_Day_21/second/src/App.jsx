import React,{useEffect,useState} from 'react'
import {Card} from './Card'
import './App.css'
export const App = () => {
    const [Data, setData] = useState('')
    const [Load, setLoad] = useState(true)
    useEffect(() => {
        setLoad(true)
        const fetchapi=async ()=>{
            // const res=await fetch('https://jsonplaceholder.typicode.com/posts');
            const res=await fetch('https://jsonplaceholder.typicode.com/users');
            const data= await res.json();
            setData(data)
            setLoad(false)
        }
        fetchapi();
    }, [])
   if(Load){
       return(
           <>
           <h2>data is loading...</h2>
           </>
)
   }
   return (
       <>
          
       {
           Data.map((user)=>{
                return <Card key={user.id} user={user}/>
           })
       }
       </>
   )
}
