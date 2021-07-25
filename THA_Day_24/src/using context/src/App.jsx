import React,{useState,createContext} from 'react'
import {Navbar} from './companents/Navbar'
import {Home} from './companents/Home'
import {About} from './companents/About'
import {Profile} from './companents/Profile'
import {Dashboard} from './companents/Dashboard'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const ContextOne=createContext();
const ContextTwo=createContext();
export const App = () => {
  const [Auth, setAuth] = useState(false)
  const [BtnVal, setBtnVal] = useState("Login")
    return (
        <Router>
            <main>
              <ContextOne.Provider value={Auth}>
            <Navbar/>
          </ContextOne.Provider>
         <Switch>
          <Route exact path="/">
            <ContextTwo.Provider value={{Auth,BtnVal,setBtnVal,setAuth}}>
            <Home setAuth={setAuth} Auth={Auth} BtnVal={BtnVal} setBtnVal={setBtnVal}/>
            </ContextTwo.Provider>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
        <Profile />
          </Route>
          <Route path="/dashboard">
        <Dashboard />
        </Route>
        </Switch>
        </main>
        </Router>
    )
}
export {ContextOne,ContextTwo};