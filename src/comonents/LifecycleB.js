import React, { Component } from 'react'


class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'aishu'
      }
      console.log(' a constructor')
    }
    
 static getDerivedStateFromProps(props,state) {
    console.log(' getDerivedStateFromProps')
    return null
 }

componentDidMount(){
   console.log(' componentDidMount') 
}

  render() {
    console.log('render')
    return (
      <div>
        Lifecycle
      </div>
    )
  }
}

export default LifecycleB
