import React, { Component } from 'react'

class result extends Component{
    render(){
        return (
            <div>
                Maths: {this.props.state.maths}
                <hr></hr>
                Physics: {this.props.state.physics}
                <hr></hr>
                Chemistry: {this.props.state.chem}
                <hr></hr>
                Total Score: {this.props.state.maths+this.props.state.physics+this.props.state.chem}
            </div>
        )
    }
}

export default result
