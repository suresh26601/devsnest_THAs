import React, { useState, useEffect } from "react";
import { Form } from "./componants/Form";
import { List } from "./componants/List";
import './App.css'
export const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(list);
  }, [list]);

  const addList = (data) => {
    data = { ...data, id: new Date().getTime().toString() };
    setList([...list, data]);
  };

  const deleteList = (id) => {
    setList((pre) => {
      return pre.filter((ele) => {
        return ele.id !== id;
      });
    });
  };

  const editDone = (editList) => {
    const editDataInx = list.findIndex((ele) => ele.id === editList.id)
    list[editDataInx]=editList;
    setList(list);
  };
  return (
    <div className="container mt-4">
      <Form addList={addList} />
      {list.length!==0?list.map((ele) => {
        return (
          <List
            key={ele.id}
            {...ele}
            deleteList={deleteList}
            editDone={editDone}
          />
        );
      }):<h2>Start Adding Items</h2>}
      
    </div>
  );
};
