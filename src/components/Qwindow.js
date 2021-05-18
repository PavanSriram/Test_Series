import Question from "./Question"
import "./Qwindow.css"
import "./bootstrap.css"
import Qpallet from "./Qpallet"
import "./Qwindow.css"

const Qwindow = () => {
    return (   
        <div class = "container-fluid">
            <div className="row">
                <div className="col-md-9 qwindow">
                    <Question />
                </div>
                <div className="col-md-3 qpallet">
                    <Qpallet />
                </div>
            </div>
        </div>
    )
}

export default Qwindow
