import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import ActivePerformance from "./shows/ActivePerformance";

export default class Board extends Component {
  
  state = {
    show: null,
    performance: []
  }
  

  componentDidMount() {
    setInterval(() => {
      this.fetchShow()
    }, 5000)
  }

  fetchShow = () => {
    miPrograma.getActive()
      .then(data => {
        this.setState({ show: data })
      })
  }

  render() {
    const { show } = this.state;
    return (
      <div className = "Board">
        {show && show.current && <ActivePerformance show={show} />}
      </div>
    )
  }
}

