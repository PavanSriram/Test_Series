import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    tabs: ["active", ""],
    signInOrUP: ["", ""],
    btn: ["", "none"],
    validity: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    to: "/options"
  };

  handleTab = (tab) => {
    if (tab === 0) {
      this.setState({
        tabs: ["active", ""],
        signInOrUP: ["", ""],
        btn: ["", "none"],
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
    } else {
      this.setState({
        tabs: ["", "active"],
        signInOrUP: ["none", "none"],
        btn: ["none", ""],
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
    }
  };

  validateEmail = (mail) => {
    const expression = /\S+@\S+/;
    if (expression.test(String(mail).toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const validity = this.state.validity;
    if (name == "email") {
      if (!this.validateEmail(value)) validity["email"] = " is-invalid";
      else validity["email"] = "";
    }
    if (name == "firstName") {
      if (value == "") validity["firstName"] = " is-invalid";
      else validity["firstName"] = "";
    }
    if (name == "lastName") {
      if (value == "") validity["lastName"] = " is-invalid";
      else validity["lastName"] = "";
    }
    if (name == "password") {
      if (value == "") validity["password"] = " is-invalid";
      else validity["password"] = "";
    }
    this.setState({ validity });
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    if((this.state.tabs[0] == "active" && (!this.validateEmail(this.state.email) || this.state.firstName == "" || this.state.lastName == "" || this.state.password == "")) || (this.state.tabs[1] == "active" && (!this.validateEmail(this.state.email) || this.state.password == "")))
      e.preventDefault();
    const validity = this.state.validity;

    if (!this.validateEmail(this.state.email))
      validity["email"] = " is-invalid";
    else validity["email"] = "";

    if (this.state.firstName == "") validity["firstName"] = " is-invalid";
    else validity["firstName"] = "";

    if (this.state.lastName == "") validity["lastName"] = " is-invalid";
    else validity["lastName"] = "";

    if (this.state.password == "") validity["password"] = " is-invalid";
    else validity["password"] = "";

    this.setState({ validity });
  };

  handleValidity = (e) => {
    if (this.state[e.target.name] == "firstName") {
      if (this.state[e.target.value] !== "") return "";
      else return " is-invalid";
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav
          style={{ height: 100 }}
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="card shadow p-3 mb-5 bg-white rounded"
          style={{
            width: "25%",
            marginTop: "5%",
            marginLeft: "38%",
            backgroundColor: "lightgray",
          }}
        >
          <div className="card-header">
            <ul
              className="nav nav-tabs card-header-tabs"
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <li className="nav-item">
                <a
                  className={"nav-link " + this.state.tabs[0]}
                  href="#"
                  onClick={() => {
                    this.handleTab(0);
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={"nav-link " + this.state.tabs[1]}
                  href="#"
                  onClick={() => {
                    this.handleTab(1);
                  }}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "3%",
                display: this.state.signInOrUP[0],
              }}
            >
              <label for="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className={"form-control" + this.state.validity["firstName"]}
                id="SignUpInput1"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
                required
              ></input>
              <div class="invalid-feedback">Please enter yout First name!</div>
            </div>

            <div
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "3%",
                display: this.state.signInOrUP[1],
              }}
            >
              <label for="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className={"form-control" + this.state.validity["lastName"]}
                id="SignUpInput2"
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
                required
              ></input>
              <div class="invalid-feedback">Please enter your Last name!</div>
            </div>

            <div
              style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}
            >
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={"form-control" + this.state.validity["email"]}
                id="validationCustom01"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              ></input>
              <div class="invalid-feedback">Please enter valid Email!</div>
            </div>

            <div
              style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}
            >
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="Password"
                className={"form-control" + this.state.validity["password"]}
                id="exampleFormControlInput4"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                required
              ></input>
              <div class="invalid-feedback">Please enter Password!</div>
            </div>

            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                marginTop: "3%",
              }}
            >
              <Link
                onClick={this.handleSubmit}
                role="button"
                type="submit"
                className="btn btn-secondary"
                to={this.state.to}
                style={{ display: this.state.btn[0] }}
              >
                Create Account
              </Link>

              <Link
                onClick={this.handleSubmit}
                role="button"
                type="submit"
                className="btn btn-secondary"
                to={this.state.to}
                style={{ display: this.state.btn[1] }}
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
