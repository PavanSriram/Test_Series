import React, { Component } from 'react'

class result extends Component{
    render(){
        return (
            <div>
                Maths: {this.props.maths}
                <hr></hr>
                Physics: {this.props.physics}
                <hr></hr>
                Chemistry: {this.props.chem}
                <hr></hr>
                Total Score: {this.props.maths+this.props.physics+this.props}
            </div>
        )
    }
}

export default result
