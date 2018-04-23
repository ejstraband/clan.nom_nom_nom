// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Logon from "./pages/Logon/Logon";
import SignUp from "./pages/SignUp/SignUp";

const App = () => (
  <div>
    <Nav />
    <Main />
    <Logon />
    <SignUp />
    
  </div>
);

export default App;
