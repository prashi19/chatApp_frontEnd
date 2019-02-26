import React, { Component } from "react";
import "../App.css";
import { userLogin } from '../services/userServices'
import Button from "../components/button";
import Input from "../components/input";
import Snackbar from '@material-ui/core/Snackbar';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: ""
        };
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.registrationclick = this.registrationclick.bind(this)
        this.forgetClick = this.forgetClick.bind(this)
    }

    onChange(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.Username) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "email cannot be empty..!"
            });
        } else if (!this.state.Password) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password cannot be empty..!"
            });
        } else if (
            !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Username)
        ) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Invalid Username..!"
            });
        } else if (this.state.Password.length < 6) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password must be of atleast 6 characters long..!"
            });
        } else {
            var data = {
                Username: this.state.Username,
                Password: this.state.Password
            }
            userLogin(data)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "Login Successfull!!"
                    });
                    localStorage.setItem('Sender', this.state.Username);
                    this.props.history.push('/dashBoard');
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "Login failed!!"
                    });
                });
        }
    }
    registrationclick = e => {
        e.preventDefault();
        this.props.history.push('/register');
    };
    forgetClick = e => {
        e.preventDefault();
        this.props.history.push('/forgot');
    };

    render() {
        return (
            <div className="Login">
                <form noValidate onSubmit={this.onSubmit}>
                    <div id="header">
                        <h1>Welcome to the Login Page</h1>
                    </div>
                    <div id="Email">
                        <Input type={"Email"} className={"form-control"} id={this.state.Username} name={"Username"} placeholder={"Email Address"} value={this.state.Username} onChange={this.onChange} />
                    </div>
                    <div id="Password">
                        <Input type={"Password"} className={"form-control"} id={this.state.Password} name={"Password"} placeholder={"Password"} value={this.state.Password} onChange={this.onChange} />
                    </div>
                    <div id="Login_Forgot_Button">
                        <Button label={"Login"} title={"SignIn"} onClick={this.handleSubmit} />
                        <Button label={"Register"} title={"Register"} onClick={this.registrationclick} />
                        <Button label={"Forgot Password?"} title={"Forgot Password?"} onClick={this.forgetClick} />
                    </div>
                </form>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={5}
                    onClose={this.handleSnackClose}
                    variant="error"
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> {this.state.snackBarMessage} </span>}
                    action={[

                    ]}
                />

            </div>
        );
    }
}