import React, { Component } from "react";
import Clock from "../clock/clock";

class Datecmp extends React.Component {
  state = {
    currentDate: new Date().toUTCString()
  };
  render() {
    return <>{this.state.currentDate}</>;
  }
}
export default Datecmp;
