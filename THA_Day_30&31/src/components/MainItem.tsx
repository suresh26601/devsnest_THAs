import {Link} from "react-router-dom";
interface MainItemInterface {
    id:number,
    title:string,
    price:number,
    img:string
}
export const MainItem = ({id,title,price,img}:MainItemInterface) => {
    return (
        <div >
           
                <img src={img}/>
            
             <Link to={`/${id}`}>
            <h5>{title}</h5>
            </Link>
            <p>{price}</p>

        </div>
    )
}
