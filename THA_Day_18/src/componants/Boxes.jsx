import React from "react";
import {Box} from "./Box"; 
const Boxes = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {arr.map((element) => {
        return arr.map((e, v) => {
          return <Box key={element + v} row={element} col={e} />;
        });
      })}
    </>
  );
};

export default Boxes;
