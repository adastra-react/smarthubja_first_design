import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Members">

          </Route>

          <Route path="Info Hub">
              
          </Route>

          <Route path="/pricing">
              
          </Route>

          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
