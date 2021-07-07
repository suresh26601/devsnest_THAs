import React from 'react';
import "./App.css";
import imgPng from "./images/meme.png";
import ProOne from "./componants/ProOne"
import {ProTwo} from "./componants/ProTwo"
// ***main function*********


function App() {
  
  return (
    <>
    <ProOne/>
    <ProTwo img={imgPng}/>
    </>
  );
}

export default App;
