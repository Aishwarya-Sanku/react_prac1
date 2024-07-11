import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }

    //   this.changedMessage= this.changedMessage.bind(this)
    }
    changedMessage(){
        this.setState({message: 'Goodbye'})

  
    }

    clickHandler=()=>{
        this.setState({message: 'goodbye'})
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changedMessage.bind(this)}>Click</button> */}
        {/* <button onClick={()=> this.changedMessage()}>Click</button> */}
        {/* <button onClick={this.changedMessage} >Click</button> */}
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default EventBind
