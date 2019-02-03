import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
          <input
            type="button"
            value="find Gifs"
            onClick={() => this.props.searchedTerm(this.state.input)}
          />
        </form>
      </div>
    );
  }
}
