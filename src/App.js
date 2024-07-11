
import './App.css';
import { Component } from 'react';
// import Form from './comonents/Form';
import React from 'react';
// import Lifecycle from './comonents/Lifecycle';
// import Fragment from './comonents/Fragment';
// import Table from './comonents/Table';
// import RefDemo from './comonents/RefDemo';
// import PortalDemo from './comonents/PortalDemo';
// import ErrorhandlingEg from './comonents/ErrorhandlingEg';
// import ErrorBoundary from './comonents/ErrorBoundary';
// import ClickCounter from './comonents/ClickCounter';
// import HoverCounter from './comonents/HoverCounter';
import ClickCounterTwo from './comonents/ClickCounterTwo';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ClickCounterTwo/>
      {/* <HoverCounter/> */}
      {/* <ClickCounter/> */}
      {/* <ErrorBoundary>
      <ErrorhandlingEg name="king"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorhandlingEg name="Queen"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorhandlingEg name="Joker"/>
      </ErrorBoundary> */}
      {/* <ErrorhandlingEg/> */}
      {/* <PortalDemo/> */}
      {/* <RefDemo/> */}
      {/* <Table/> */}
      {/* <Fragment/> */}
      {/* <Lifecycle/> */}
      {/* <Form/> */}
    </div>
  );
}
}
export default App;
