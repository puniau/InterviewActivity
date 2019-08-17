import React, { Component } from "react";
import Clock from "../clock/clock";
import Datecmp from "../date/datecmp";

class Home extends React.Component {
  state = {
    isHidden: true
  };

  toggleDate = () => {
    console.log("togg");
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <>
        <p>Current Time</p>
        <Clock />

        <button type="button" onClick={this.toggleDate}>
          Toggle Date
        </button>
        <div> {!this.state.isHidden && <Datecmp />}</div>
      </>
    );
  }
}
export default Home;
