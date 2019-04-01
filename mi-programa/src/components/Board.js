import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
// import { activeArtist } from;
import ActivePerformance from "./shows/ActivePerformance";

export default class Board extends Component {
  state = {
    shows: [],
    performance: []
  };

  componentDidMount() {
    this.fetchActivePerformance();
  }

  fetchActivePerformance = () => {
    miPrograma.getActivePerformance()
      .then(shows => { 
        this.setState({ shows: shows[0] })
    });
  };


  render() {
    const {shows} = this.state;
    return (
      <div className="Board">
      <ActivePerformance shows={shows} />
    </div>
    );
  }
}
