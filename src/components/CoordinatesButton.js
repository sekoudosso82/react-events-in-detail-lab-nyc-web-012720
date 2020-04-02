// Code CoordinatesButton Component Here

import React, {Component} from 'react'

class CoordinatesButton extends Component{

    onReceiveCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return(
            <div>
            <button onClick={this.onReceiveCoordinates}>
                CoordinatesButton
            </button>  
            </div>
        )
    }
}

export default CoordinatesButton

