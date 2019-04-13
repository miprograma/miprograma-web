import React, { Component } from "react";
import miPrograma from "../services/MiPrograma";
import { Icon } from "antd-mobile";
import CardShowItem from "./shows/CardShowItem"
import Calendar from "react-calendar";

const getToday = () => {
  const today = new Date();
  today.setHours(2,0,0,0);

  return today;
}

export default class ControlArtistPerformance extends Component {
  state = {
    shows: [],
    date: getToday(),
    loading: true
  }

  fethShows = () => {
    miPrograma.getAllShows({ date: this.state.date })
      .then(shows => this.setState({ shows: shows, loading: false }))
  }

  componentDidMount() {
    this.fethShows();
  }

  handleChangeCurrent = (showId, artist, performance) => {
    const data = {
      id: showId,
      current: { artist, performance }
    }

    miPrograma.updateShow(data)
      .then(() => this.fethShows())
  }

  isActive = (show, session) => {
    return show.current && show.current.artist.id === session.artist.id &&
      show.current.performance.id === session.performance.id
  }

  changeDate = (date) => {
    this.setState({ date }, () => {
      this.fethShows()
    })
  }

  makeActive = (show) => {
    miPrograma.setActive(show)
      .then(() => {
        this.fethShows()
      })
  }

  render() {
    const { shows, loading } = this.state;
    if (loading)return <p>Cargando...</p>
    return (
      <div>

        <Calendar value={this.state.date} onChange={this.changeDate}/>

        {this.state.shows.map(show => (
          <div key={show.id}>
            <h1>{show.title}</h1>
            
            {!show.active && (
              <button onClick={() => this.makeActive(show)}>Show activo</button>
            )}

            blocks:

            <ul>
              {show.sessions.map((s, i) => (
                <li key={i}>
                  {s.artist.name}, {s.performance.title}
                  {!this.isActive(show, s) && (
                    <button
                      onClick={() => this.handleChangeCurrent(show.id, s.artist.id, s.performance.id)}>
                      Active
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}