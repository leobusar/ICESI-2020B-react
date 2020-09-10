import React, { Component } from 'react'
import './App.css';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import PageNotFound from './components/Errors/PageNotFound'
import NavBar from './components/NavBar/NavBar'

import {BrowserRouter as Router, Route, Switch } from  'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      owner: "Leonardo"
    }
  }
  
  render() {

  return (
    <Router>
      <NavBar />
      <div className="container">
      <h1>Home {this.state.owner} </h1>
      <Switch >
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>  
      </div>
    </Router>
  );
  } 
}

export default App;
