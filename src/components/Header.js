import React, { Component } from 'react';
import './Header.css'
import "./bootstrap.css"
import Clock from "./Clock.js"

class Header extends Component {
    

    render() { 
        return ( 
            <div className='header'>
            <div>
                <h3 id='test-name' >Eamcet Mock Test-1</h3>
                <span id='time-left'>
                    TimeLeft: {this.props.clock}
                </span>

                <br></br>
                <br></br>
                <br></br>
                </div>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={() => {this.props.handleSection(0)}} className={"nav-link"+this.props.classNames[0]} aria-current="page" href="#">Maths</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => {this.props.handleSection(1)}} className={"nav-link"+this.props.classNames[1]} href="#">Physics</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => {this.props.handleSection(2)}} className={"nav-link"+this.props.classNames[2]} href="#">Chemistry</a>
                        </li>
                    </ul>
            </div>
        </div>
         );
    }
}
 
export default Header;
