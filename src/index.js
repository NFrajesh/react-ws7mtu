import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import EmailForm from './contact';

import Home from './Home';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'


  var routing=(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={EmailForm}/> 
        </Switch>
      </Router>
)

ReactDOM.render(routing, document.getElementById("root"))












