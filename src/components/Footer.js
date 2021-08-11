import React, { Component } from "react";
import "./Footer.css";
import "./bootstrap.css";

let active = "disabled";

class Footer extends Component {
  

  render() {
    return (
      <div className="footer">
        <button onClick={this.props.onMfR} type="button" className="btn btn-secondary" id="btn1">Mark for Review & Next</button>
        <button onClick={this.props.onClear} type="button" className="btn btn-secondary" id="btn2">Clear</button>
        <button
          onClick={this.props.onPrevious}
          type="button"
          className="btn btn-secondary"
          id="btn3"
        >
          Previous
        </button>

        <button
          onClick={this.props.onNext}
          type="button"
          className="btn btn-secondary"
          id="btn4"
        >
          Save & Next
        </button>

        <button onClick={this.props.onFinish} type="button" className="btn btn-secondary" id="btn5" disabled={this.props.min<150 ? "" : "disabled"}>Finish</button>
      </div>
    );
  }
}

export default Footer;
