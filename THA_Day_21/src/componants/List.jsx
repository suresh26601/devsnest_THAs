import React, { useState } from "react";

export const List = ({ id, item, calorie, deleteList, editDone }) => {
  const [editMe, setEditMe] = useState(false);
  const [Item, setItem] = useState(item);
  const [Calorie, setCalorie] = useState(calorie);
  const editCheck = () => {
    if (Item && Calorie) {
      editDone({ id:id, item:Item, calorie:Calorie });
      setEditMe(!editMe);
    } else {
      console.log("chande right edit");
    }
  };
  if (editMe) {
    return (
      <div className="container my-3 p-3 border">
        <input className=" mx-2"
          type="text"
          value={Item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input className="mx-2"
          type="number"
          value={Calorie}
          onChange={(e) => setCalorie(e.target.value)}
        />
        <button
          className="btn btn-outline-danger mx-2 "
          onClick={() => deleteList(id)}
        >
                 <i className='material-icons' style={{fontSize:'20px',width:"40px"}}>delete</i>
        </button>
        <button
          className="btn btn-outline-success mx-2 "
          onClick={() => {
              editCheck();
            }}
        >
            <i className='material-icons' style={{fontSize:'20px',width:"40px"}}>done_all</i>
        </button>
      </div>
    );
  } else {
    return (
      <div className="container my-3 p-3 border">
        <h4>{Item}</h4>
        <p>You have consumed {Calorie} calories.</p>
        <button
          className="btn btn-outline-primary mx-2 my-1"
          onClick={() => setEditMe(!editMe)}
        >
          {/* <i className='far fa-edit' style={{fontSize:'20px'}}></i> */}
        <i className='material-icons' style={{fontSize:'20px',width:"40px"}}>edit</i>
        </button>
        <button
          className="btn btn-outline-danger mx-2 my-1"
          onClick={() => deleteList(id)}
        >
          <i className='material-icons' style={{fontSize:'20px',width:"40px"}}>delete</i>
          
        </button>
      </div>
    );
  }
};
