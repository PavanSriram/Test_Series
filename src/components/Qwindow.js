import React, { Component } from "react";
import Question from "./Question";
import Qpallet from "./Qpallet";
import "./Qwindow.css";
import "./bootstrap.css";

class Qwindow extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div className="row">
          <div className="col-md-9 qwindow">
            <Question
              questions={this.props.questions}
              currentQuestionId={this.props.currentQuestionId}
              currentSection={this.props.currentSection}
              onRadio={this.props.onRadio}
            />
          </div>
          <div className="col-md-3 qpallet">
            <Qpallet 
              questions={this.props.questions}
              currentQuestionId={this.props.currentQuestionId}
              currentSection={this.props.currentSection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Qwindow;
