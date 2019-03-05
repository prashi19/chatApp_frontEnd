import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import { resetPassword } from "../services/userServices";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Password: "",
            newPassword: "",
            snackBarMessage: ""
        };
        this.baseState = this.state;
    }
    /**
     * it will takes the new password
     */
    handlePasswordChange = event => {
        const Password = event.target.value;
        this.setState({ Password: Password });
    };
    /**
     * it will takes the confirm newpassword
     */
    handlenewPasswordChange = event => {
        const newPassword = event.target.value;
        this.setState({ newPassword: newPassword });
    };
    /**
     * it will submit the entered password and checks the all the conditions
     */
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Password === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password cannot be empty"
            });
        } else if (this.state.newPassword === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Confirm Password cannot be empty"
            });
        } else if (this.state.Password.length < 6) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password must be of atleast 6 characters long"
            });
        } else if (this.state.newPassword.length < 6) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Confirm Password must be of atleast 6 characters long"
            });
        } else if (this.state.Password !== this.state.newPassword) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password and Confirm password must be same"
            });
        } else {
            event.preventDefault();
            let current_url = window.location.pathname;
            let verify_user_token = current_url.substr(19);
            console.log(verify_user_token);
            console.log("current ", current_url);
            resetPassword(this.state.Password, verify_user_token)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "Password changed successfully"
                    });
                    this.props.props.history.push("/login");
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "Please Try Again.."
                    });
                });
        }
    };
    /**
     * it will resets the page or form if we entered wrong fields
     */
    resetForm = () => {
        this.setState(this.baseState);
    };
    /**
     * use to auto close snackBar
     */
    handleSnackClose = () => {
        this.setState({
            openSnackBar: false
        })
    };
    render() {
        return (
            <div>
                <center>
                    <div>
                        <TextField
                            label="New Password*"
                            type="password"
                            value={this.state.Password}
                            onChange={this.handlePasswordChange}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Confirm New Password*"
                            type="password"
                            value={this.state.newPassword}
                            onChange={this.handlenewPasswordChange}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div id="button" >
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            title="click on submit"
                            onClick={this.handleSubmit}>
                            submit
                                </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="reset"
                            title="click on reset"
                            onClick={this.resetForm}>
                            reset
                            </Button>
                    </div>
                </center>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={6000}
                    onClose={this.handleSnackClose}
                    variant="error"
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> {this.state.snackBarMessage} </span>}
                    action={[
                        <div key="undo">
                            <Button key="undo" color="primary" size="small" onClick={this.handleSnackClose}>
                                UNDO
                        </Button>
                        </div>
                    ]}
                />
            </div>
        );
    }
}