import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Qwindow from "./components/Qwindow";

class question {
  constructor(id) {
    this.id = id;
  }
}

class App extends Component {
  state = {
    questions: [new Array(50), new Array(50), new Array(50)],
    currentQuestionId: 0,
    currentSection: 0,
    classNames: [" active", "", ""],
  };
  constructor() {
    super();
    let k = 0;
    let i = 0;
    for (let j = 0; j < 3; j++) {
      for (i = 0; i < 50; i++) {
        this.state.questions[j][i] = new question(k++);
        this.state.questions[j][i].text = "what is ...?" + k;
        this.state.questions[j][i].options = ["A", "B", "C", "D"];
        this.state.questions[j][i].answer = null;
        this.state.questions[j][i].isAttempted = false;
        this.state.questions[j][i].optionChosen = [false, false, false, false];
        this.state.questions[j][i].markedForReview = false;
        this.state.questions[j][i].isVisited = false;
        this.state.questions[j][i].color = "lightgrey";
        this.state.questions[j][i].border = "";
      }
    }
  }

  handleNext = () => {    

    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
    if(questions[this.state.currentSection][this.state.currentQuestionId].optionChosen.indexOf(true) !== -1){
      questions[this.state.currentSection][this.state.currentQuestionId].isAttempted = true;
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'green';
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 49) {
      this.setState({ currentQuestionId: this.state.currentQuestionId + 1 });
    } else {
      if (this.state.currentSection === 0) {
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
        });
      }
      if (this.state.currentSection === 1) {
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
        });
      }
    }
  };

  handlePrevious = () => {

    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true && questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
      questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 0) {
      this.setState({ currentQuestionId: this.state.currentQuestionId - 1 });
    } else {
      if (this.state.currentSection === 1) {
        this.setState({
          classNames: [" active", "", ""],
          currentQuestionId: 49,
          currentSection: this.state.currentSection - 1,
        });
      }
      if (this.state.currentSection === 2) {
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 49,
          currentSection: this.state.currentSection - 1,
        });
      }
    }
  };

  handleSection = (tabNumber) => {
    if (this.props.currentSection !== tabNumber) {
      if (tabNumber === 0) {
        this.setState({
          classNames: [" active", "", ""],
          currentQuestionId: 0,
          currentSection: tabNumber,
        });
      }
      if (tabNumber === 1) {
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: tabNumber,
        });
      }
      if (tabNumber === 2) {
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: tabNumber,
        });
      }
    }
  };

  handleRadio = (radioNumber) => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];
    questions[this.state.currentSection][this.state.currentQuestionId].optionChosen[radioNumber] = true;
    
    this.setState({ questions: questions });
  }

  handleClear = () => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];
    this.setState({ questions })
  }

  handleMfR = () => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    questions[this.state.currentSection][this.state.currentQuestionId].markedForReview = true;
    questions[this.state.currentSection][this.state.currentQuestionId].color = 'rgb(243, 12, 224)';
    if(questions[this.state.currentSection][this.state.currentQuestionId].optionChosen.indexOf(true) !== -1){
      questions[this.state.currentSection][this.state.currentQuestionId].isAttempted = true;
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 49) {
      this.setState({ currentQuestionId: this.state.currentQuestionId + 1 });
    } else {
      if (this.state.currentSection === 0) {
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
        });
      }
      if (this.state.currentSection === 1) {
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
        });
      }
    }
  }

  handleGoTo = (id) => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true && questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
    }
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true)
      questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];

    if(id > 99)
      this.setState({ questions: questions, currentQuestionId: id-100});
    else if(id > 49)
      this.setState({ questions: questions, currentQuestionId: id-50});
    else
    this.setState({ questions: questions, currentQuestionId: id});
  }

  render() {
    return (
      <div className="container-fluid test">
        <div className="row">
          <Header 
            questions={this.state.questions}
            currentQuestionId={this.state.currentQuestionId}
            currentSection={this.state.currentSection}
            classNames={this.state.classNames}
            handleSection={this.handleSection}
          />
        </div>
        <div className="row">
          <Qwindow
            questions={this.state.questions}
            currentQuestionId={this.state.currentQuestionId}
            currentSection={this.state.currentSection}
            onRadio={this.handleRadio}
            goTo={this.handleGoTo}
          />
        </div>
        <div className="row">
          <Footer
            questions={this.state.questions}
            currentQuestionId={this.state.currentQuestionId}
            currentSection={this.state.currentSection}
            onNext={this.handleNext}
            onPrevious={this.handlePrevious}
            onClear={this.handleClear}
            onMfR={this.handleMfR}
          />
        </div>
      </div>
    );
  }
}

export default App;
