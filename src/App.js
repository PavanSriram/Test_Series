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
    this.state.questions[this.state.currentSection][this.state.currentQuestionId].border = "solid";
  }

  handleNext = () => {    

    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    if(questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
    }
    questions[this.state.currentSection][this.state.currentQuestionId].border = "";
    if(questions[this.state.currentSection][this.state.currentQuestionId].optionChosen.indexOf(true) !== -1){
      questions[this.state.currentSection][this.state.currentQuestionId].isAttempted = true;
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'green';
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 49) {
      questions[this.state.currentSection][this.state.currentQuestionId+1].border = "solid";
      this.setState({ currentQuestionId: this.state.currentQuestionId + 1, questions : questions});
    } else {
      if (this.state.currentSection === 0) {
        questions[this.state.currentSection+1][0].border = "solid";
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
          questions : questions
        });
      }
      if (this.state.currentSection === 1) {
        questions[this.state.currentSection+1][0].border = "solid";
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
          questions: questions
        });
      }
    }
  };

  handlePrevious = () => {

    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    questions[this.state.currentSection][this.state.currentQuestionId].border = "";
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true && questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
      questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 0) {
      questions[this.state.currentSection][this.state.currentQuestionId-1].border = "solid";
      this.setState({ currentQuestionId: this.state.currentQuestionId - 1, questions: questions });
    } else {
      if (this.state.currentSection === 1) {
        questions[this.state.currentSection-1][49].border = "solid";
        this.setState({
          classNames: [" active", "", ""],
          currentQuestionId: 49,
          currentSection: this.state.currentSection - 1,
          questions: questions
        });
      }
      if (this.state.currentSection === 2) {
        questions[this.state.currentSection-1][49].border = "solid";
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 49,
          currentSection: this.state.currentSection - 1,
          questions: questions
        });
      }
    }
  };

  handleSection = (tabNumber) => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    questions[this.state.currentSection][this.state.currentQuestionId].border = "";
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true && questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
      questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];
    }

    if (this.props.currentSection !== tabNumber) {
      if (tabNumber === 0) {
        questions[0][0].border = "solid";
        this.setState({
          classNames: [" active", "", ""],
          currentQuestionId: 0,
          currentSection: tabNumber,
          questions: questions
        });
      }
      if (tabNumber === 1) {
        questions[1][0].border = "solid";
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: tabNumber,
          questions: questions
        });
      }
      if (tabNumber === 2) {
        questions[2][0].border = "solid";
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: tabNumber,
          questions: questions
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
    questions[this.state.currentSection][this.state.currentQuestionId].border = "";
    questions[this.state.currentSection][this.state.currentQuestionId].color = 'rgb(243, 12, 224)';
    if(questions[this.state.currentSection][this.state.currentQuestionId].optionChosen.indexOf(true) !== -1){
      questions[this.state.currentSection][this.state.currentQuestionId].isAttempted = true;
    }
    this.setState({ questions });

    if (this.state.currentQuestionId !== 49) {
      questions[this.state.currentSection][this.state.currentQuestionId+1].border = "solid";
      this.setState({ currentQuestionId: this.state.currentQuestionId + 1, questions: questions });
    } else {
      if (this.state.currentSection === 0) {
        questions[this.state.currentSection+1][0].border = "solid";
        this.setState({
          classNames: ["", " active", ""],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
          questions: questions
        });
      }
      if (this.state.currentSection === 1) {
        questions[this.state.currentSection+1][0].border = "solid";
        this.setState({
          classNames: ["", "", " active"],
          currentQuestionId: 0,
          currentSection: this.state.currentSection + 1,
          questions: questions
        });
      }
    }
  }

  handleGoTo = (id) => {
    const questions = this.state.questions;
    questions[this.state.currentSection][this.state.currentQuestionId].isVisited = true;
    questions[this.state.currentSection][this.state.currentQuestionId].border = "";
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true && questions[this.state.currentSection][this.state.currentQuestionId].color === 'lightgrey'){
      questions[this.state.currentSection][this.state.currentQuestionId].color = 'red';
    }
    if(questions[this.state.currentSection][this.state.currentQuestionId].isAttempted !== true)
      questions[this.state.currentSection][this.state.currentQuestionId].optionChosen = [false, false, false, false];

    if(id > 99){
      questions[this.state.currentSection][id-100].border = "solid";
      this.setState({ questions: questions, currentQuestionId: id-100});
    }
    else if(id > 49){
      questions[this.state.currentSection][id-50].border = "solid";
      this.setState({ questions: questions, currentQuestionId: id-50});
    }
    else{
      questions[this.state.currentSection][id].border = "solid";
      this.setState({ questions: questions, currentQuestionId: id});
    }
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
