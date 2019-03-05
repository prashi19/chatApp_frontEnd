import React, { Component } from "react";
import Login from "./screens/login";
import Register from "../src/screens/register";
import ForgotPassword from "../src/screens/forgot";
import ResetPassword from "../src/screens/reset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoard from "../src/screens/dashboard";
import SampleAppBar from "../src/components/appBar";
import Samp from "../src/screens/samp";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Login">
        <Router>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/logout" component={SampleAppBar} />
            <Route path="/samp" component={Samp}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
