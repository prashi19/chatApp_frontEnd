// import React, { Component } from 'react';
// import "../App.css";
// import { userLogin } from '../services/userServices'
// import Button from "../components/button";
// import Input from "../components/input";
// import Snackbar from '@material-ui/core/Snackbar';

// export default class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: "",
//             lastName: "",
//             Email: "",
//             Password: "",
//             ConformPassword: ""
//         };
//         this.onChange = this.onChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.registrationclick = this.registrationclick.bind(this)
//         this.forgetClick = this.forgetClick.bind(this)
//     }



//     handleuserfirstNameChange = event => {
//         const firstName = event.target.value;
//         this.setState({ firstName: firstName });
//     };
//     /**
//      * takes the lastname
//      */
//     handleuserlastNameChange = event => {
//         const lastName = event.target.value;
//         this.setState({ lastName: lastName });
//     };
//     /**
//      * takes the email
//      */
//     handleuserEmailChange = event => {
//         const Email = event.target.value;
//         this.setState({ Email: Email });
//     };
//     /**
//      * takes the password
//      */
//     handlePasswordChange = event => {
//         const Password = event.target.value;
//         this.setState({ Password: Password });
//     };
//     /**
//      * takes the confirm password
//      */
//     handleconfirmPasswordChange = event => {
//         const ConfirmPassword = event.target.value;
//         this.setState({ ConfirmPassword: ConfirmPassword });
//     };


//     onChange(e) {
//         e.preventDefault()
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         if (!this.state.firstName) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "first name cannot be empty"
//             })
//         }
//         else if (!/[a-zA-Z]/.test(this.state.firstName)) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "Invalid First name"
//             });
//         }
//         else if (!/[a-zA-Z]/.test(this.state.lastName)) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "Invalid Last name"
//             });
//         }
//         else if (!this.state.Email) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "email cannot be empty"
//             });
//         } else if (!this.state.Password) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "Password cannot be empty"
//             });
//         } else if (
//             !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email)
//         ) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "Invalid email"
//             });
//         } else if (this.state.Password.length < 6) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "Password must be of atleast 6 characters"
//             });
//         }
//         else if (this.state.Password !== this.state.ConformPassword) {
//             this.setState({
//                 openSnackBar: true,
//                 snackBarMessage: "password and conform password must be same"
//             });
//         }
//         else {
//             var data = {
//                 firstName: this.state.firstName,
//                 lastName: this.state.lastName,
//                 Email: this.state.Email,
//                 Password: this.state.Password,
//             }
//             userLogin(data)
//                 .then((response) => {
//                     console.log("rrrrrrrrrrrrrrr",response);
//                     this.setState({
//                         openSnackBar: true,
//                         snackBarMessage: "Registration Successfull!!"
//                     });
//                     localStorage.setItem('Sender', this.state.Email);
//                     this.props.history.push('/dashBoard');
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     this.setState({
//                         openSnackBar: true,
//                         snackBarMessage: "Registration failed!!"
//                     });
//                 });
//         };
//     };
//     registrationclick = e => {
//         e.preventDefault();
//         this.props.history.push('/register');
//     };
//     forgetClick = e => {
//         e.preventDefault();
//         this.props.history.push('/forgot');
//     }
//     resetForm = () => {
//         this.setState(this.baseState);
//     };
//     loginClick = e => {
//         e.preventDefault();
//         this.props.history.push("/login");
//     };

//     render() {
//         return (
//             <div className="Login">
//                 <form noValidate onSubmit={this.onSubmit}>
//                     <div id="header">
//                         <h1>Welcome to the Register Page</h1>
//                     </div>
//                     <div id="Name">
//                         <label>Firstname</label> <br />
//                         <Input type={"firstName"} className={"form-control"} id={this.state.Name} name={"firstName"} placeholder={"first name"} value={this.state.firstName} onChange={this.onChange} />
//                     </div>
//                     <div id="Name"></div>
//                    <label>Lastname</label><br />
//                     <Input type={"lastName"} className={"form-control"} id={this.state.Name} name={"lastName"} placeholder={"last name "} value={this.state.lastName} onChange={this.onChange} />
//                     <div id="Email">
//                         <label>Email address</label> <br />
//                         <Input type={"Email"} className={"form-control"} id={this.state.Username} name={"Email"} placeholder={"Email Address"} value={this.state.Email} onChange={this.onChange} />
//                     </div>
//                     <div id="Password">
//                         <label>Password</label><br />
//                         <Input type={"Password"} className={"form-control"} id={this.state.Password} name={"Password"} placeholder={"Password"} value={this.state.Password} onChange={this.onChange} />
//                     </div>
//                     <div id="Password">
//                         <label>Conform Password</label><br />
//                         <Input type={"Password"} className={"form-control"} id={this.state.ConformPassword} name={"ConformPassword"} placeholder={"Password"} value={this.state.ConformPassword} onChange={this.onChange} />
//                     </div>
//                     <div id="Login_Forgot_Button">
//                         <Button label={"Submit"} title={"Submit"} onClick={this.handleSubmit} />
//                         <Button label={"Login"} title={"SignIn"} onClick={this.loginClick} />
//                         <Button label={"Reset"} title={"Reset"} onClick={this.resetForm} />
//                     </div>


//                     <Snackbar
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'right',
//                         }}
//                         open={this.state.openSnackBar}
//                         autoHideDuration={5}
//                         onClose={this.handleSnackClose}
//                         variant="error"
//                         ContentProps={{
//                             'aria-describedby': 'message-id',
//                         }}
//                         message={<span id="message-id"> {this.state.snackBarMessage} </span>}
//                         action={[

//                         ]}
//                     />

//                 </form>
//             </div>
//         );


//     }
// }



import React, { Component } from "react";
import "../App.css";
import { userRegister } from "../services/userServices";
import Buttons from "../components/button";
import Inputs from "../components/input";
import Snackbar from "@material-ui/core/Snackbar";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            Email: "",
            Password: "",
            confirmPassword: "",
            snackBarMessage: ""
        };
        this.baseState = this.state;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleuserfirstNameChange = this.handleuserfirstNameChange.bind(this);
        this.handleuserlastNameChange = this.handleuserlastNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleconfirmPasswordChange = this.handleconfirmPasswordChange.bind(this);
    }

    loginClick = e => {
        e.preventDefault();
        this.props.history.push("/login");
    };
    resetForm = () => {
        this.setState(this.baseState);
    };
    handleuserfirstNameChange = event => {
        const firstName = event.target.value;
        this.setState({ firstName: firstName });
    };

    handleuserlastNameChange = event => {
        const lastName = event.target.value;
        this.setState({ lastName: lastName });
    };

    handleuserEmailChange = event => {
        const Email = event.target.value;
        this.setState({ Email: Email });
    };

    handlePasswordChange = event => {
        const Password = event.target.value;
        this.setState({ Password: Password });
    };

    handleconfirmPasswordChange = event => {
        const confirmPassword = event.target.value;
        this.setState({ confirmPassword: confirmPassword });
    };
    handleSnackClose = () => {
        this.setState({
            openSnackBar: false
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.firstName === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "First Name cannot be empty!"
            });
        } else if (this.state.lastName === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Last Name cannot be empty!"
            });
        } else if (this.state.Email === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Email cannot be empty!"
            });
        } else if (
            !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.Email)
        ) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Please enter a valid Email."
            });
        } else if (this.state.Password === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password cannot be empty!"
            });
        } else if (this.state.Password.length < 6) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Password must be of atleast 6 characters long!"
            });
        } else if (this.state.confirmPassword === "") {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Confirm Password cannot be empty!"
            });
        } else if (this.state.Password !== this.state.confirmPassword) {
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Passwords doesn't match"
            });
        } else {
            var data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                Email: this.state.Email,
                Password: this.state.Password
            };
            console.log("register log===>", data);

            userRegister(data)
                .then(response => {
                    console.log(response);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "Registration Successful!"
                    });
                    this.props.history.push("/login");
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        openSnackBar: true,
                        snackBarMessage: "email address already exists!!"
                    });
                });
        }
    };
    render() {
        return (
            <div class="Login">
                <div calss="bg-img" />
                <div id="header">
                    <h1>User Registration</h1>
                </div>
                <center>
                    <div id="Name">
                        <label>Firstname</label> <br />
                        <Inputs
                            type={"text"}
                            className={"form-control"}
                            id={this.state.firstName}
                            name={"firstName"}
                            placeholder={"First Name"}
                            value={this.state.firstName}
                            onChange={this.handleuserfirstNameChange}
                        /><br />
                        <label>Lastname</label> <br />
                        <Inputs
                            type={"text"}
                            className={"form-control"}
                            id={this.state.lastName}
                            name={"lastName"}
                            placeholder={"Last Name"}
                            value={this.state.lastName}
                            onChange={this.handleuserlastNameChange}
                        /><br />
                    </div>
                    <div id="Email">
                        <label>Email</label> <br />
                        <Inputs
                            type={"email"}
                            className={"form-control"}
                            id={this.state.Email}
                            name={"Email"}
                            placeholder={"Email"}
                            value={this.state.Email}
                            onChange={this.handleuserEmailChange}
                        /><br />
                    </div>
                    <div id="Passwordss">
                        <label>Password</label> <br />
                        <Inputs
                            type={"password"}
                            className={"form-control"}
                            id={this.state.Password}
                            name={"Password"}
                            placeholder={"Password"}
                            value={this.state.Password}
                            onChange={this.handlePasswordChange}
                        /><br />
                        <label>ConfirmPassword</label> <br />
                        <Inputs
                            type={"password"}
                            className={"form-control"}
                            id={this.state.confirmPassword}
                            name={"confirmPassword"}
                            placeholder={"Confirm Password"}
                            value={this.state.confirmPassword}
                            onChange={this.handleconfirmPasswordChange}
                        /><br />
                    </div>
                    <div id="Login_Forgot_Buttons">
                        <Buttons label={"Submit"} color={"primary"} title={"Submit"} onClick={this.handleSubmit} />
                        <Buttons label={"Reset"} color={"link"} title={"Reset"} onClick={this.resetForm} />
                        <Buttons label={"login"} color={"outlined"} title={"Sign-in"} onClick={this.loginClick} />
                    </div>
                </center>

                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left"
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