import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
// import { activeArtist } from;
import ActivePerformance from "./shows/ActivePerformance";


export default class Board extends Component {
  state = {
    show: [],
    performance: [],
    nextShow: 0
  };

  componentDidMount() {
    this.fetchActivePerformance();
  }
  
  fetchActivePerformance = () => {
    miPrograma.getActivePerformance()
      .then(shows => { 
        this.setState({ show: shows[0] })
    });
  };


  render() {
    const {show} = this.state;
    return (
      <div className="Board">
      <ActivePerformance show={show} />
    </div>
    );
  }
}
