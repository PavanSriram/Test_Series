import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Options from "./options";
import Home from "./home";
import ExamWindow from './examWindow';
import Result from './Result';
import "./App.css";

class App extends Component {
  state = {
    min : 180,
    sec : 0,
    maths :0, 
    physics : 0,
    chem : 0,
    score : 0,
    isFinished : false,
    clock : "180:00"
  };

  componentDidMount = () => {
    this.intervalID = setInterval(
      () => this.time(),
      1000
    );
  }

  time = () => {
    // console.log("Calculating Marks!!!")
    // if(isFinished)
    //   return ;
    if(this.state.min === 0 && this.state.sec===0){
      console.log("Calculating Marks!!!")
      this.calculate();
      
      // this.resultPage();

      // console.log("Maths");
      // console.log(maths);
      // console.log("Physics");
      // console.log(physics);
      // console.log("Chemistry");
      // console.log(chem);
      // console.log("Total Score");
      // console.log(maths + physics + chem);
      // isFinished = true;

      return ;
    }
    else if(this.state.sec === 0){
        this.setState({sec : 60, min : this.state.min-1})
        // sec = 60;
        // min--;
    }
    this.setState({sec : this.state.sec-1})

    if(this.state.min <= 0 && this.state.sec===0){
        // min = -1;
      this.setState({
        clock: "0:00"
      });
    }
    else if(this.state.sec >= 10){
        this.setState({
        clock: this.state.min.toString() + ":" + this.state.sec.toString()
        });
    }
    else{
        this.setState({
        clock: this.state.min.toString() + ":0" + this.state.sec.toString()
        });
    }
  }

  calculate = () => {
    let maths=0, physics=0, chem=0;
    for(let i=0; i<50; i++){
      if(this.state.questions[0][i].isAttempted === true && this.state.questions[0][i].optionChosen === this.state.questions[0][i].answer)
        maths++;
    }
    for(let i=0; i<50; i++){
      if(this.state.questions[1][i].isAttempted === true)
        physics++;
    }
    for(let i=0; i<50; i++){
      if(this.state.questions[2][i].isAttempted === true)
        chem++;
    }
    let score = maths + physics + chem;
    this.setState({maths , physics, chem, score});
  }

  handleFinish = () => {
    this.calculate();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/options/exam" component={ExamWindow} clock={this.state.clock} />
        </Switch>
      </Router>
    );
  }
}

export default App;
