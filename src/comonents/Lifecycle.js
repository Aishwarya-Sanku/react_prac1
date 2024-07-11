import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class Lifecycle extends Component {
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
            <LifecycleB/>
      <div>
        Lifecycle
      </div>
      </div>
    )
  }
}

export default Lifecycle
