/******************************************************************************
 *  @Purpose        : To create a forgot password page for recover the password
                    using mail.
 *  @file           : forgotPassword.jsx       
 *  @author         : PRASHANTH S
 *  @version        : v0.1
 *  @since          : 02-03-2019
 ******************************************************************************/
import React, { Component } from "react";
import "../App.css";
import { forgotPassword } from "../services/userServices";
import Buttons from "../components/button";
import Inputs from "../components/input";
import Snackbar from "@material-ui/core/Snackbar";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      openSnackBar: false,
      snackBarMessage: ""
    };
  }
  /**
   * it will takes the forgot password user email
   */
  handleuserNameChange = event => {
    const userName = event.target.value;
    this.setState({ userName: userName });
  };

  /**
   * it will submit the forgotPasswordPage and checks all the conditions
   */
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.userName === "") {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "Please enter your Email"
      });
    } else if (
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.userName)
    ) {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "Enter valid Email"
      });
    } else {
      forgotPassword(this.state.userName);
    }
  };

  handleSnackClose = () => {
    this.setState({
      openSnackBar: false
    });
  };

  render() {
    return (
      <div class="Login">
        <center>
          <h3> Forgot Password?</h3>
          <Inputs
            type={"Email"}
            className={"form-control"}
            id={this.state.Email}
            name={"Email"}
            placeholder={"Email"}
            value={this.state.Email}
            onChange={this.handleuserNameChange}
          />
          <div id="Forgot_Button">
            <Buttons
              label={"Submit"}
              color={"primary"}
              title={"Submit"}
              onClick={this.handleSubmit}
            />
          </div>
        </center>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.openSnackBar}
          autoHideDuration={5000}
          onClose={this.handleSnackClose}
          variant="error"
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id"> {this.state.snackBarMessage} </span>}
          action={[
            <div key="undo">
              <Buttons
                label={"Undo"}
                color={"primary"}
                title={"close"}
                onClick={this.handleSnackClose}
              />
            </div>
          ]}
        />
      </div>
    );
  }
}
