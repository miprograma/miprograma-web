import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "antd-mobile";
import CardShowItem from "./shows/CardShowItem"

export default class ControlArtistPerformance extends Component {
  state = {
    artistList: [],
    performanceList: [],
    show: {},
    performance: [],
    newShow: {}
  };

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


  // componentDidMount() {
  //   this.fetchActivePerformance();
  // }

  // fetchActivePerformance = () => {
  //   miPrograma.getActivePerformance().then(data => {
  //     this.setState({ show: data });
  //   });
  // };

  handleChange = e => {
    console.log(e.target.value);
  };


  render() {


    const  sessions = this.state.newShow;

    if (!sessions || (sessions && sessions === [])) {
      return (
        <React.Fragment>
          <Icon type="loading" style={{ color: "black" }} />
          <div> Loading...</div>
        </React.Fragment>
      );
    }
    const  artists = this.state.artistList;
    const  performances = this.state.performanceList;
    const  show  = this.state;
      return (
          <CardShowItem show={show} artists={artists} performances={performances}/>
      );
    }
  }

  //-------------------NOTAS PARA Mí (RECORDAR ELIMIRALAS)
// state = {
//   date: new Date(),
//   show: {}
// };

// onChange = date => {
//   this.setState({ date }, () => this.setPerformance());

// }

// componentDidMount() {
//   this.setPerformance();
// }

// setPerformance = () => {
//   miPrograma.getActivePerformance(this.state.date)
//     .then(show => this.setState({ show }))
// }

  //  onChange={this.handleChange}

  // handleChange(event){
  //   console.log('hola')
  // }

  // <form onSubmit={handleSubmit}>
  // <Item></Item>
  // <Button type="submit"></Button>
  // </form>

  // if (!this.state.show.sessions) {
  //   //loader
  // } else {
  //   return { this.state.sessions.map(session => <SessionItem session={session}
  // onChange={this.handleChange}
  //     (
  //     cada sesion <div>{session.name}</div>
  //   ))
  // }

  // sessionItem = () => (return { this.state.sessions.map(session => (
  //   cada sesion <div>{this.props.session.name}</div>
  // )))