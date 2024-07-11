import React from 'react';

// function Greet(){
//     return (
//         <h1>Hello, Aishwarya!</h1>
//     );
// }

//arrow function
//export const Greet =() => <h1>huhu</h1> //named export 
// const Greet =() => <h1>functional comp</h1>   

//props
const Greet =(props) =>{
    return(
        <div>
        <h1>Hello, {props.name} is a  {props.gender}!</h1>
        {props.children}
        </div>
    )
}
export default Greet;

