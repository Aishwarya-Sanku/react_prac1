import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal(
    
      <h1>portals demo</h1>,
      document.getElementById('portal-root') // DOM element where the portal will be rendered
   
  )
}

export default PortalDemo
