import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
// import { activeArtist } from;
import ArtistCard from "./shows/ActivePerformance";

export default class Board extends Component {
  state = {
    artist: [],
    performance: []
  };
  fetchActivePerformance = () => {
    miPrograma.getActivePerformance().then((artist, performance) => {
      this.setState({ artist: artist, performance: performance });
    });
  };//<------- Me quedo aquí que no puedo más por hoy. Lo dejo en domingo.
  
  //   // miProgramaService con el get ActiveShows
  // }

  // componentDidMount(){
  //   this.fetchActiveShow();
  // }

  render = () => (
    <div className="Board">
      <ArtistCard />
    </div>
  );
}
