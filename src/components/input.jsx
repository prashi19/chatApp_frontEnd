import React, { Component } from "react";
export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Username: "",
        Password: ""
    };
}
      handleUsernameChange = event => {
        const Username = event.target.value;
        this.setState({ Username: Username });
    }
    handlePasswordChange = event => {
        const Password = event.target.value;
        this.setState({ Password: Password });
    }
    render() {
      return (        
        <input type={this.props.type}
            className={this.props.className}
            id={this.props.id}
            name={this.props.name}    
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange} />
    );
  }
}