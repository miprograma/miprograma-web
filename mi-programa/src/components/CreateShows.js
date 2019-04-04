import React, { Component } from "react";
import ArtistPerformance from './shows/artistPerformance';
import miPrograma from '../services/MiPrograma'


export default class CreateShows extends Component {
  state = {
    artists: [],
    performances: []
  };

  componentDidMount() {
    this.fetchArtistsList();
    this.fetchPerformanceList();
  }
  
  fetchArtistsList = () => {
    miPrograma.getArtistsList()
      .then(artist => { 
        this.setState({ artists: artist })
    });
  };
  
  fetchPerformanceList = () => {
    miPrograma.getPerformanceList()
      .then(performance => { 
        this.setState({ performances: performance })
    });
  };


  render() {
    const {artists} = this.state;
    const {performances} = this.state;
    return (
      <div >
      <ArtistPerformance artists = {artists} performances = {performances}/>
    </div>
    );
  }
}