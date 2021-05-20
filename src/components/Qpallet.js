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
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][0].color}} className="btn">01</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][1].color}} className="btn">02</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][2].color}} className="btn">03</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][3].color}} className="btn">04</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][4].color}} className="btn">05</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][5].color}} className="btn">06</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][6].color}} className="btn">07</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][7].color}} className="btn">08</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][8].color}} className="btn">09</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][9].color}} className="btn">10</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][10].color}} className="btn">11</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][11].color}} className="btn">12</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][12].color}} className="btn">13</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][13].color}} className="btn">14</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][14].color}} className="btn">15</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][15].color}} className="btn">16</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][16].color}} className="btn">17</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][17].color}} className="btn">18</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][18].color}} className="btn">19</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][19].color}} className="btn">20</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][20].color}} className="btn">21</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][21].color}} className="btn">22</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][22].color}} className="btn">23</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][23].color}} className="btn">24</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][24].color}} className="btn">25</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][25].color}} className="btn">26</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][26].color}} className="btn">27</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][27].color}} className="btn">28</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][28].color}} className="btn">29</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][29].color}} className="btn">30</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][30].color}} className="btn">31</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][31].color}} className="btn">32</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][32].color}} className="btn">33</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][33].color}} className="btn">34</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][34].color}} className="btn">35</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][35].color}} className="btn">36</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][36].color}} className="btn">37</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][37].color}} className="btn">38</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][38].color}} className="btn">39</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][39].color}} className="btn">40</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][40].color}} className="btn">41</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][41].color}} className="btn">42</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][42].color}} className="btn">43</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][43].color}} className="btn">44</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][44].color}} className="btn">45</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][45].color}} className="btn">46</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][46].color}} className="btn">47</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][47].color}} className="btn">48</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][48].color}} className="btn">49</button>
                <button style={{backgroundColor:this.props.questions[this.props.currentSection][49].color}} className="btn">50</button>
            </div>            
        </div>
        );
    }
}
 
export default Qpallet;