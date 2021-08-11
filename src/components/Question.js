import React, { Component } from 'react';
import "./Question.css"
import "./bootstrap.css"

class Question extends Component {
    render() { 
        return ( 
            <div className="question">
                <p>{this.props.questions[this.props.currentSection][this.props.currentQuestionId].text}</p>
                <input onClick={() => {
                    this.props.onRadio(0)
                    }} 
                    checked={this.props.questions[this.props.currentSection][this.props.currentQuestionId].optionChosen[0]} type="radio" id="A" name="option"></input>
                <label htmlFor="A">{this.props.questions[this.props.currentSection][this.props.currentQuestionId].options[0]}</label>
                <br></br>
                <input onClick={() => {this.props.onRadio(1)}} checked={this.props.questions[this.props.currentSection][this.props.currentQuestionId].optionChosen[1]} type="radio" id="B" name="option"></input>
                <label htmlFor="B">{this.props.questions[this.props.currentSection][this.props.currentQuestionId].options[1]}</label>
                <br></br>
                <input onClick={() => {this.props.onRadio(2)}} checked={this.props.questions[this.props.currentSection][this.props.currentQuestionId].optionChosen[2]} type="radio" id="C" name="option"></input>
                <label htmlFor="C">{this.props.questions[this.props.currentSection][this.props.currentQuestionId].options[2]}</label>
                <br></br>
                <input onClick={() => {this.props.onRadio(3)}} checked={this.props.questions[this.props.currentSection][this.props.currentQuestionId].optionChosen[3]} type="radio" id="D" name="option"></input>
                <label htmlFor="D">{this.props.questions[this.props.currentSection][this.props.currentQuestionId].options[3]}</label>
                <br></br>
            </div>
     );
    }
}
 
export default Question;

