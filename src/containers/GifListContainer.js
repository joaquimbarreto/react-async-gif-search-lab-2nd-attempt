import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchedTerm: "",
      gifs: []
    };
  }

  handleSearchedTerm = event => {
    debugger;
    this.setState({ searchedTerm: event });
    this.getGifs();
  };

  getGifs = () => {
    console.log(this.state.searchedTerm);
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.searchedTerm
      }&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          gifs: data.data.slice(0, 3)
        })
      );
  };

  render() {
    return (
      <div>
        <GifSearch searchedTerm={this.handleSearchedTerm} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
