import React, { Component } from 'react'
 class RefDemo extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefDemo

