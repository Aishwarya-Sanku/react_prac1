import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleusernameChange = (event) =>{
        this.setState({username: event.target.value})
      }
    handlecommentsChange = (event) =>{
        this.setState({comments: event.target.value})
      }
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
      }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
            <label >Username:</label>
            <input type="text" value={this.state.username}
             onChange={this.handleusernameChange}
             />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments}
            onChange={this.handlecommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
            </select>
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
     </form>
    )
  }
}

export default Form
