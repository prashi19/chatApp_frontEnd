import React, { Component } from "react";
import "../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../assets/index.png";
import Buttons from "../components/button";

export default class SampleAppBar extends Component {
  logoutClick = e => {
    e.preventDefault();

    this.props.props.history.push("/login");
  };
  render() {
    return (
      <div className="aa">
        <AppBar position="fixed" color="default">
          <Toolbar className="head">
            <div id="welcome">
              <h1>ChatApp</h1>
            </div>
            <div className="aa logo">
              <img src={logo} alt="Logo" width="120" height="80" />
            </div>

            <div id="logoutbtn">
              <Buttons
                label={"logout"}
                color={"primary"}
                title={"logout"}
                onClick={this.logoutClick}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
