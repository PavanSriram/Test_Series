import React, { Component } from 'react';
import "./Qpallet.css"

class Qpallet extends Component {
    render() { 
        return ( 
            <div>
            <div className="btn-inst">
                <p>Instructions</p>
                <textbox id="violet" className="textbox">01</textbox>
                <label htmlFor="violet">- Marked for Review</label>
                <br></br>
                <textbox id="red" className="textbox">02</textbox>
                <label htmlFor="red">- Skipped</label>
                <br></br>
                <textbox id="green" className="textbox">03</textbox>
                <label htmlFor="green">- Attempted</label>
                <hr></hr>
            </div>
            <div className="btn-num">
            {
                this.props.questions[this.props.currentSection].map((que) => (
                <button
                    onClick={() => {this.props.goTo(que.id)}}
                    style={{backgroundColor:que.color, width: 45}}
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