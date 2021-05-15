import "./Question.css"
import "./bootstrap.css"

const Question = () => {
    return (
        <div className="question">
            <p>What is the distance between Earth and Moon ?</p>
            <input type="radio" id="A" name="option"></input>
            <label htmlFor="A">Option A</label>
            <br></br>
            <input type="radio" id="B" name="option"></input>
            <label htmlFor="B">Option B</label>
            <br></br>
            <input type="radio" id="C" name="option"></input>
            <label htmlFor="C">Option C</label>
            <br></br>
            <input type="radio" id="D" name="option"></input>
            <label htmlFor="D">Option D</label>
            <br></br>
        </div>
    )
}

export default Question
