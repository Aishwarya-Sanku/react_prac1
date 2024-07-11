import React from 'react'

function ErrorhandlingEg({name}) {

    
    
   
    if (name==='Joker'){
        throw new Error('Invalid Name')
    }



  return (
    <div>
      {name}
      {/* <h1>hi</h1> */}
    </div>
  )
}

export default ErrorhandlingEg
