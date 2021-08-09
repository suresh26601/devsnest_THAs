import {FC} from 'react'
import {Main} from './components/Main';
import {Item} from './components/Item'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { isImportClause } from 'typescript';

export const App:FC = () => {
    return (
      <main>
        <Router>
          <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:id">
            <Item/>
          </Route>
        </Switch>
        </Router>
      </main>
    )
}
