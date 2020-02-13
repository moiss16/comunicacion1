import React from 'react';
import './App.css';
import Principal from './principal';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Cv from './cv.js';
import Contacto from './contacto.js';




function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/contacto" component={Contacto} />
          </Switch>
        </Router>
  );
}

export default App;
