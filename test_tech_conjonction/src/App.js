import React, { Component } from "react";
import Home from './components/Home.js';
import Forgotpassword from './components/Forgotpassword.js';
import Dashboard from './components/Dashboard.js';
import Register from './components/Register.js';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

//import modules et components

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: []
    }
  }

  render() {

    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forgotpassword" component={Forgotpassword} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </div>

      // routing vers les différentes pages
    );
  }


}

export default App;
