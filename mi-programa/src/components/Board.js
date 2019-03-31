import React, { Component } from 'react';
import miPrograma from '../services/MiPrograma';
// import { activeArtist } from;
import ArtistCard from './shows/ActivePerformance';

export default class Board extends Component {
  state = {
    artist: [],
    performance: []
    
  }
    // fetchActivePerformance = () =>{
    //   miPrograma.getActivePerformance()
    //     .then((artist, performance) => {
    //       this.setState({ artist: artist, performance: performance })
    //     })
    //   // miProgramaService con el get ActiveShows
    // }

    // componentDidMount(){
    //   this.fetchActiveShow();
    // }


  render = () =>(
    <div className="Board">
      <ArtistCard />
    </div>
  ) 

 
}
