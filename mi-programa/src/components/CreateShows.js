import React, { Component } from "react";
import ArtistPerformance from "./shows/artistPerformance";
import miPrograma from "../services/MiPrograma";

export default class CreateShows extends Component {
  state = {
    artistList: [],
    performanceList: [],
    showArtist: [],
    sohwPerformance: []
  };

  componentDidMount() {
    this.fetchArtistsList();
    this.fetchPerformanceList();
  }

  fetchArtistsList = () => {
    miPrograma.getArtistsList().then(artist => {
      this.setState({ artistList: artist });
    });
  };

  fetchPerformanceList = () => {
    miPrograma.getPerformanceList().then(performance => {
      this.setState({ performanceList: performance });
    });
  };

  render() {
    const { artistList } = this.state;
    const { performanceList } = this.state;
    return (
      <div>
        <ArtistPerformance
          artists={artistList}
          performances={performanceList}
        />
      </div>
    );
  }
}
