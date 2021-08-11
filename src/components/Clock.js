import React, { Component } from 'react'

let sec=0, min=180;
class Clock extends Component{
    
    constructor(){
        super();
        this.state = {
            clock: "180:00"
        };
    }

    componentDidMount(){
        this.intervalID = setInterval(
          () => this.time(),
          1000
      );
      }
    
      time(){
        if(sec === 0){
            sec = 60;
            min--;
        }
        sec--;
    
        if(min <= 0 && sec===0){
            sec=1;
          this.setState({
            clock: "0:00"
          });
        }
        else if(sec >= 10){
            this.setState({
            clock: min.toString() + ":" + sec.toString()
            });
        }
        else{
            this.setState({
            clock: min.toString() + ":0" + sec.toString()
            });
        }
        // console.log(this.state.clock);
      }

    render() {
        return (
            <div>
                {this.state.clock}
            </div>
        )
    }
}

export default Clock

