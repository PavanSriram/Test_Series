import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Options from "./options";
import Home from "./home";
import ExamWindow from './examWindow';
import Result from './Result';
import "./App.css";

class App extends Component {
  state = {
    
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/options/exam" render = {() => <ExamWindow clock={this.state.clock} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
