import React from 'react'
import {Navbar} from './companents/Navbar'
import {Home} from './companents/Home'
import {About} from './companents/About'
import {Service} from './companents/Service'
import {Contact} from './companents/Contact'
import {Load} from './companents/Load'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App = () => {
    return (
        <Router>
            <main>
            <Navbar />
         <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
        <Service />
          </Route>
          <Route path="/contact">
        <Contact />
        </Route>
        </Switch>
        <Load />
        </main>
        </Router>
    )
}
