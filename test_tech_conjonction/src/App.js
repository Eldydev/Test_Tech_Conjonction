import React, { Component } from "react";
import Home from './components/Home.js';
import Forgotpassword from './components/Forgotpassword.js';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

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
        {/* Don't forget to include the history module */}
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forgotpassword" component={Forgotpassword} />
          </Switch>
        </Router>
      </div>
    );
  }


}

export default App;
