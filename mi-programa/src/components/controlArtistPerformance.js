import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "antd-mobile";

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


    const show = this.state.show.sessions;

    if (!show || (show && show === [])) {
      return (
        <React.Fragment>
          <Icon type="loading" style={{ color: "black" }} />
          <div> Loading...</div>
        </React.Fragment>
      );
    }

      return (
        <React.Fragment>
        <div className="box-controller">Sesión {this.state.show.sessions.length}</div>
        <div className="box-controller">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="checkbox"
                  aria-label="Radio button for following text input"
                />
              </div>
            </div>
            <div
              type="text"
              className="form-control"
              aria-label="Text input with radio button"
            >
              {(this.state.show.current)? this.state.show.current.artist.name + " " + this.state.show.current.performance.title: console.log('nada') }
            </div>
          </div>
        </div>
        </React.Fragment>
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