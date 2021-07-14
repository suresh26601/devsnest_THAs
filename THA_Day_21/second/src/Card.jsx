import React,{useState} from 'react'

export const Card = ({user}) => {
    const [More, setMore] = useState(false)
    return (
        <main>
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <p style={{color:'blue',cursor:"pointer"}}>{user.email}</p>
            <h5>{user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</h5>
            <h6 style={{color:'tomato'}}>
                {user.phone}<br/>
                {
                    user.website
                }
            </h6>
            
        </main>
        // <main>
        //     <h1>{user.userId}</h1>
        //     <h4>{user.title}</h4>
        //     <h6>{More?<>{user.body}<span onClick={()=>setMore(!More)}>...Show less</span></>:<>{user.body.slice(0,40)}<span onClick={()=>setMore(!More)}>...Read more</span></>}</h6>
        // </main>
    )
}
