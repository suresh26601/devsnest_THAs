import React, { useState } from "react";

export const Form = ({addList}) => {
  const [item, setItem] = useState("");
  const [calorie, setCalorie] = useState("");
  const checkForm = (e) => {
    e.preventDefault();
      if(item && calorie){
        const data= {
            item:item,
            calorie:calorie
        }
          addList(data);
          setItem('')
          setCalorie('')
      }
       else{
            console.log("fiil whole form first")
        }
  };
  return (
    <form className="text-center" onSubmit={checkForm}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={item}
          placeholder="Item Name"
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          value={calorie}
          placeholder="Calorie amount"
          rows="3"
          onChange={(e) => setCalorie(e.target.value)}
        />
      </div>
      <button className="btn btn-success ">
                 <i className='material-icons' style={{fontSize:'15px',width:"100px"}}>add</i>
          
      </button>
    </form>
  );
};
