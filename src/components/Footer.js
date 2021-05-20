import React, { Component } from "react";
import "./Footer.css";
import "./bootstrap.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <button type="button" className="btn btn-secondary" id="btn1">Mark for Review & Next</button>
        <button type="button" className="btn btn-secondary" id="btn2">Clear</button>
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

        <button type="button" className="btn btn-secondary" id="btn5">Finish</button>
      </div>
    );
  }
}

export default Footer;
