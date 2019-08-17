import React, { Component } from "react";

class Giphy extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };
  /*
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.onType();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };
  */

  handleSubmit = event => {
    event.preventDefault();
    var filt = [];
    const data = this.input.value;
    console.log(data);

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=TxQ0HuxZxefFwEF5a0X2ivpuAcX0HkTz&q=${data}&limit=5&offset=0&rating=G&lang=en`
    )
      .then(response => response.json())
      .then(data => {
        filt = Object.entries(data.data);
        this.setState({
          filteredData: filt
        });
      });

    console.log(this.state.filteredData);
  };
  /*
  onType = () => {
    var filt = [];
    console.log(this.state.query + "ww");
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=TxQ0HuxZxefFwEF5a0X2ivpuAcX0HkTz&q=${
        this.state.query
      }&limit=5&offset=0&rating=G&lang=en`
    )
      .then(response => response.json())
      .then(data => {
        filt = Object.entries(data.data);
        // console.log(filt);
        this.setState({
          filteredData: filt
        });
      });

    console.log(this.state.filteredData);
  };
  */

  render() {
    return (
      <>
        <p>Search gifs</p>
        <div className="searchForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="search"
              placeholder="Search for..."
              ref={el => (this.input = el)}
              //  onChange={e => this.handleInputChange(e)}
            />

            <div>
              {this.state.filteredData.map((person, index) => (
                <img src={person[1].images.downsized.url} />
              ))}
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Giphy;
