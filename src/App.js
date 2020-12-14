import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";
import "./App.css";
import Movies from "./Movies";
import Header from './Header';
import Landing from './Landing';
import Moviedetails from "./Moviedetails";
import Error from './Error'
const App = () => 
  <Router>
    <Header />
    <Switch>
      <Route exact path="/movies">
        <Movies />
      </Route>

      <Route path="/movies/:id" component={Moviedetails} />

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="*">
            <Error />
          </Route>

    
    </Switch>
  </Router>;


export default App;