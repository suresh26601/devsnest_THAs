import {FC,useState} from 'react'
import {useSelector} from 'react-redux'
import { rootReducerType } from "../Reducers/index";

export const Navbar:FC = () => {
  const [isShowCart, setIsShowCart] = useState<boolean>(false)
  const {addToCart} = useSelector((state:rootReducerType) => state.ISR)
    return (
      <>
         <nav>
            <h1>Ecommerce Website</h1>
            <button onClick={()=>setIsShowCart(!isShowCart)}>Cart</button>
          </nav>
          <article className="cart" style={{right:(isShowCart?"0px":"-310px")}}>
            <button onClick={()=>setIsShowCart(!isShowCart)}>Cart</button>
              {addToCart.map((cartItem)=>{
                  return (
                    <p key={cartItem.id}>{cartItem.title}</p>
                  )
                })}
          </article>
      </>
    )
}
