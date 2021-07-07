import React from 'react';
import "./App.css";
import { Header } from "./componants/Header";
import { Cards } from "./componants/Cards";
// ***main function****npm *****


function App() {
  
  return (
    <>
    <div className="Main">
    <Header/>
    <h1>Calorie Read Only</h1>
    <Cards/>
    </div>
    </>
  );
}

export default App;
