import React, { Component } from "react";
import "../App.css";
import { Button } from "@material-ui/core";
export default class Buttons extends Component {

  render() {
    return (
      <Button
      variant="contained"
      color="primary"
      type="submit"
      title={this.props.title}
      onClick={this.props.onClick}
    >
      {this.props.label}
    </Button>
    );
  }
}