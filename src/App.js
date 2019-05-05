import './App.css';
import React, { Component } from 'react';
import Homepage from './component/Homepage';
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Signup from "./component/Signup"
import Login from "./component/Login"
import Calculator from "./component/Calculator"



class App extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <Router>
          <Route path="/login" exact strict component={Login}/>
          <Route path="/" exact strict component={Homepage}/>
          <Route path="/signup" exact strict component={Signup}></Route>
          <Route path="/calculator" exact strict component={Calculator}/>
        </Router>
        
      </>
    );
  }
}

export default App;
