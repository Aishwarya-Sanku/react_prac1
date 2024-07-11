//class component 

import React,{Component} from "react";

class Welcome extends Component {
    render() {
        return (
            // <h1>Hello {this.props.name}!</h1>
            //<h1>class comp</h1>
            <h4>hi {this.props.name} , and ur a {this.props.gender}</h4>
        );
    }

}


export default Welcome;