import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    clickHandler=()=>{
    this.setState(prevState =>{
        return {count:prevState.count + 1}
  
    })
    }
    
  render() {
    const {count}=this.state
    return (
    
        <button onClick={this.clickHandler}>{this.props.name}Clicked {count} times</button>
      
    )
  }
}

export default UpdatedComponent(ClickCounter)
