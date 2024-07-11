import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,

      }
    }
    
  render() {

    return(
        this.state.isLoggedIn ?
        <div>hi</div> :
        <div>hello</div>
    )
//     if (this.state.isLoggedIn){
//         return <div>Welcome Aishwarya</div>;
//     }
//  else {
//         return <div>Welcome Guest</div>;
//     }

// let msg 
// if(this.state.isLoggedIn){
//     msg = 'Welcome Aishwarya'
// }
// else{
//     msg = 'Welcome Guest'
// }

// return <div>{msg}</div>  // this line replaces the if-else block above. If isLoggedIn is true, it will show 'Welcome Aishwarya', otherwise 'Welcome Guest' will be shown.
    


    // return (
    //   <div>
    //     <div>
    //     Welcome Aishwarya</div>
    //     <div> Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
