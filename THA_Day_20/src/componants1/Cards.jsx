import React from 'react'
import { Card} from "./Card";
const Data=[{id:1,
head:"Pizza",
para:"you have consumed 56 cals today."},{id:2,
head:"Burger",
para:"you have consumed 90 cals today."},{id:3,
head:"Coke",
para:"you have consumed 200 cals today."},{id:4,
head:"Browne",
para:"you have consumed 110 cals today."},{id:5,
head:"Fried Rice",
para:"you have consumed 50 cals today."},{id:6,
head:"Lassania",
para:"you have consumed 150 cals today."},]
export const Cards = () => {
    const [data, setData] = React.useState(Data)
    const deleteCard=(id)=>{
        setData((pre)=>{
            return pre.filter((e)=>{
                return e.id!==id;
            })
        })
    }
    return (
        <>
            <div className="cards">
                {
                    data.map((ele)=><Card key={ele.id} {...ele} deleteCard={deleteCard}/>)
                }
            {
                data.length===0?<p>NO Cards</p>:null
            }
            </div>
        </>
    )
}
