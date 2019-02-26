import React, { Component } from "react";
import Login from "./screens/login";
import Register from "../src/screens/register";
import ForgotPassword from "../src/screens/forgot";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    
    return (      
      <div className="Login">
        <h1><center>Welcome to ChatApp</center></h1>
        
        
        <Router>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <Route path="/forgot" component={ForgotPassword}/>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;