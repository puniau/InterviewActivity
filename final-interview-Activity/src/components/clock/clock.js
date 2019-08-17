import React, { Component } from "react";

class Clock extends React.Component {
  state = {
    // currentDateTime: Date(Date.now()).toString()
    time: new Date().toLocaleString()
  };
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    console.log("updated");
    this.setState({
      time: new Date().toLocaleString()
    });
  };

  render() {
    return <p>{this.state.time}</p>;
  }
}
export default Clock;
