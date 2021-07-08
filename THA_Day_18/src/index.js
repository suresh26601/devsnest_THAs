import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Second from "./componants1/Second";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  
    <Router>
      <Switch>
          <Route exact path="/">
            <App/>
          </Route>
          <Route path="/second">
            <Second/>
          </Route>
        </Switch>
    </Router>,
  document.getElementById('root'),
);

reportWebVitals();
