import './Footer.css'
import "./bootstrap.css"

const Footer = () => {
    return (
        <div className='footer'>
           
            <button type="button" className="btn btn-secondary" id="btn1">Mark for Review</button>
            <button type="button" className="btn btn-secondary" id="btn2">Clear</button>
           
            <button type="button" className="btn btn-secondary" id="btn3">Previous</button>
            <button type="button" className="btn btn-secondary" id="btn4">Next</button>
            
            <button type="button" className="btn btn-secondary" id="btn5">Finish</button>
        </div>
    )
}

export default Footer
