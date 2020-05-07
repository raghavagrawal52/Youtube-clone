import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="inputSearch">Video Search</label>
            <input
              id="inputSearch"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Enter Video Search"
            />
            <button
              type="submit"
              className="ui button"
              style={{ marginTop: "20px" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
