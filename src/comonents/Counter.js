import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
   
    }

    increment() {
        // this.setState({
        //     count:this.state.count +1
        // })
        this.setState( e =>({
           
            count:e.count +1,
        }
    ))
    

    }

    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:this.state.count=0
        })
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
  render() {
    return (
      <div>
        count -{this.state.count}
        <button onClick={()=> this.increment()}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>

        <button onClick={() => this.reset()}>Reset</button>


        <button onClick={()=> this.incrementFive()}>Inc5</button>
      </div>
    )
  }
}

export default Counter
