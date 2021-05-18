import './Header.css'
import "./bootstrap.css"

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h3 id='test-name' >Type of Test</h3>
                <p id='time-left'>Time Left</p>

                <br></br>
                <br></br>
                <br></br>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Maths</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Physics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Chemistry</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
