import React,{useState} from 'react'
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
export const App = () => {
  const [Auth, setAuth] = useState(false)
  const [BtnVal, setBtnVal] = useState("Login")
    return (
        <Router>
            <main>
            <Navbar Auth={Auth}/>
         <Switch>
          <Route exact path="/">
            <Home setAuth={setAuth} Auth={Auth} BtnVal={BtnVal} setBtnVal={setBtnVal}/>
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
