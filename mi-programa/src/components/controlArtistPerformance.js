import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "antd-mobile";
import CardShowItem from "./shows/CardShowItem"

export default class ControlArtistPerformance extends Component {
  state = {
    show: {},
    performance: []
  };

  
  componentDidMount() {
    this.fetchActivePerformance();
  }

  fetchActivePerformance = () => {
    miPrograma.getActivePerformance().then(data => {
      this.setState({ show: data });
    });
  };

  handleChange = e => {
    console.log(e.target.value);
  };


  render() {


    const  sessions = this.state.show;
    console.log(sessions,'sessions de controlArtist...')

    if (!sessions || (sessions && sessions === [])) {
      return (
        <React.Fragment>
          <Icon type="loading" style={{ color: "black" }} />
          <div> Loading...</div>
        </React.Fragment>
      );
    }

    const  show  = this.state;
    console.log(show, 'show control...')
      return (
          <CardShowItem show={show} />
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