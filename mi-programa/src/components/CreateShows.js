import React, { Component } from "react";
import ArtistPerformance from "./shows/artistPerformance";
import miPrograma from "../services/MiPrograma";
import ShowBlock from './shows/ShowBlock'
import Button  from "react-bootstrap/Button";
import { Icon } from "antd-mobile";

export default class CreateShows extends Component {
  constructor(props){
    super(props);

    this.state = {
      showId: '',
      artistList: [],
      performanceList: [],
      sessionsList: [],
      newShow: {
        date: '',
        session: 0,
        showBlockList: []
      }
    };

    this.newBlock = this.newBlock.bind(this);
    this.updateSessionState = this.updateSessionState.bind(this);
  }
  
  componentDidMount() {
    this.fetchArtistsList();
    this.fetchPerformanceList();
    this.fetchShow();
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

  fetchShow = () => {
    miPrograma.getShow('2019-04-08').then(show => {
      this.setState({showId: show.id});
      let blocks = [];
      if (show.sessions){
        for (let i in show.sessions){
          blocks.push({artist:show.sessions[i].artist.id, performance:show.sessions[i].performance.id });
        }
      } 
      let loadedShow = {
        date: '2019-04-08',
        session: 0,
        showBlockList: blocks
      }
      this.setState({ newShow: loadedShow });
    });
  };

  updateShowApi = () => {
    const showId = this.state.showId;
    const sessionId = '0';
    const blockList = this.state.newShow;

    miPrograma.updateShow(showId, sessionId, blockList).then(show => {
      console.log(show);
    });
  };

  newBlock () { 
    const previousArray = this.state.newShow;
    previousArray.showBlockList.push({artist:'',performance:''});
    this.setState({newShow: previousArray});
  }

  updateSessionState(session, newState){
    const previousArray = this.state.newShow;
    previousArray.showBlockList[session] = newState;
    this.setState({newShow: previousArray});

    this.updateShowApi();
  }
  
  render() {
    const { artistList } = this.state;
    const { performanceList } = this.state;
    const {newShow} = this.state;

    if (!newShow.showBlockList)
    return (
      <React.Fragment>
        <Icon type="loading" style={{ color: "black" }} />
        <div> Loading...</div>
      </React.Fragment>
    );

    console.log(newShow);
    
    return (
      <div>
        <ArtistPerformance
          artists={artistList}
          performances={performanceList}
        />

        { newShow.showBlockList.map( (show, index) => { 
          //console.log(show);
          return (
        <ShowBlock key={index}
          artists={artistList}
          performances={performanceList}
          artist={show.artist}
          performance={show.performance}
          index={index}
          onChange={this.updateSessionState}
        />
        )})}
        <Button onClick={this.newBlock} variant="success">Nuevo bloque</Button>
      </div>
    );
  }
}

