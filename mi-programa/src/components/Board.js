import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import ActivePerformance from "./shows/ActivePerformance";

export default class Board extends Component {
  
  state = {
    show: null,
    performance: []
  }
  

  componentDidMount() {
    this.fetchActivePerformance();
  }

  fetchActivePerformance = () => {
    miPrograma.getActivePerformance()
      .then(data => {
        this.setState({ show: data })
      })
  }

  render() {
    const { show } = this.state;
    return (
      <div className = "Board">
        <ActivePerformance show={show} />
      </div>
    )
  }
}
