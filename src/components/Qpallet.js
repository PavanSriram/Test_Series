import React, { Component } from 'react';
import "./Qpallet.css"

class Qpallet extends Component {
    render() { 
        return ( 
            <div>
            <div className="btn-inst">
                <p>Instructions</p>
                <span style={{textAlign: "center", minInlineSize: 30,fontSize: 15}} id="violet" className="badge badge-primary">{this.props.questions[this.props.currentSection].filter(que => que.markedForReview == true).length}</span>
                <label htmlFor="violet">- Marked for Review</label>
                <br></br>
                <span style={{textAlign: "center", minInlineSize: 30,fontSize: 15}} id="red" className="badge badge-primary">{this.props.questions[this.props.currentSection].filter(que => que.color == "red").length}</span>
                <label htmlFor="red">- Skipped</label>
                <br></br>
                <span style={{textAlign: "center", minInlineSize: 30,fontSize: 15}} id="green" className="badge badge-primary">{this.props.questions[this.props.currentSection].filter(que => que.isAttempted == true).length}</span>
                <label htmlFor="green">- Attempted</label>
                <hr></hr>
            </div>
            <div className="btn-num">
            {
                this.props.questions[this.props.currentSection].map((que) => (
                <button
                    onClick={() => {this.props.goTo(que.id)}}
                    style={{backgroundColor:que.color, width: 45, border:que.border}}
                    className="btn">
                    {que.id+1}
                </button>
                ))
            }
                
            </div>            
        </div>
        );
    }
}
 
export default Qpallet;