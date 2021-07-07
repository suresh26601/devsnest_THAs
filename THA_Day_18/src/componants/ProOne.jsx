import React from "react";
import {Box} from "./Box"
function ProOne(){
    let arr=[1,2,3,4,5,6,7,8]
    return(
        <>
        <div className="proOne">
        <div className="maindiv" id="mID">
      { 
        arr.map(element => {
            return (arr.map((e,v)=>{
                return <Box key={element+v} inx={element}/>
            }))
        })
      }
    </div>
    </div>
        </>
    );
}
export default ProOne;