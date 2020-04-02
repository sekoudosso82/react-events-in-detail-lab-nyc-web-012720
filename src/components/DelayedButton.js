import React, {Component} from 'react'
class DelayedButton extends Component{

    handleOnDelayedClick = (event) => {
      event.persist()
        setTimeout(() => this.props.onDelayedClick(event),this.props.delay) 
    }

    render(){
        console.log("*********", this.props)
        return(
            <div>
            <button onClick={this.handleOnDelayedClick }>
                    DelayedButton
            </button>   
            </div>
        )
    }
}

export default DelayedButton

