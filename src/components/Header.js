import React, { Component } from 'react';
import './Header.css'
import "./bootstrap.css"

class Header extends Component {
    render() { 
        return ( 
            <div className='header'>
            <div >
                <h3 id='test-name' >Type of Test</h3>
                <span id='time-left'>Time Left</span>

                <br></br>
                <br></br>
                <br></br>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 19d5a9c8cb9dd9a56efc03dd007d59d8c00c494a
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
=======
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
>>>>>>> c6e7785128d95e2ad92db5fb62908b459cd85ff4
            </div>
        </div>
         );
    }
}
 
export default Header;
