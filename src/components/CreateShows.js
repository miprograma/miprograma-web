import React, { Component } from "react";
import ArtistPerformance from "./shows/artistPerformance";
import miPrograma from "../services/MiPrograma";
import ShowBlock from './shows/ShowBlock'
import Button  from "react-bootstrap/Button";
import { Icon } from "antd-mobile";
import Calendar from "react-calendar";

export default class CreateShows extends Component {
  state = {
    artists: [],
    performances: [],
    selectedArtist: '',
    selectedPerformance: '',
    show: {
      title: '',
      order: 0,
      date: new Date(),
      sessions: []
    }
  }

  fetchArtists = () => {
    miPrograma.getArtistsList()
      .then(artists => this.setState({ artists }))
  }

  fetchPerformances = () => {
    miPrograma.getPerformanceList()
      .then(performances => this.setState({ performances }))
  }

  componentDidMount() {
    this.fetchPerformances()
    this.fetchArtists()
  }

  handleChange = (e) => {
    this.setState({
      show: {
        ...this.state.show,
        [e.target.name]: e.target.value
      }
    })
  }

  handleAddBlock = () => {
    const blocks = this.state.show.sessions;

    const newBlocks = [
      ...blocks,
      {
        artist: this.state.selectedArtist,
        performance: this.state.selectedPerformance,
      }
    ]

    this.setState({
      show: {
        ...this.state.show,
        sessions: newBlocks
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    miPrograma.createShow(this.state.show)
      .then(
        () => alert("show creado"),
        console.error
      )
  }

  render() {
    const show = this.state.show;

    return (
      <form onSubmit={this.handleSubmit}>
        <Calendar value={show.date} onChange={(d) => { this.handleChange({ target: { name: 'date', value: d }})}}/>

        <div>
          Title:
          <input type="text" value={show.title} name="title" onChange={this.handleChange}/>
        </div>

        <div>
          Order:
          <input type="number" value={show.order} name="order" onChange={this.handleChange}/>
        </div>

        <div>
          Artist:
          <select onChange={(e) => { this.setState({ selectedArtist: e.target.value }) }}>
            <option value={null}></option>
            {this.state.artists.map((a, i) => (
              <option value={a.id} key={i}>{a.name}</option>
            ))}
          </select>
        </div>

        <div>
          Performance:
          <select onChange={(e) => { this.setState({ selectedPerformance: e.target.value }) }}>
            <option value={null}></option>
            {this.state.performances.map((p, i) => (
              <option value={p.id} key={i}>{p.title}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button" onClick={this.handleAddBlock}>Add block</button>
        </div>

        <ul>
          {show.sessions.map((s, i) => (
            <li key={i}>
              {this.state.artists.find(a => a.id === s.artist).name},
              {this.state.performances.find(a => a.id === s.performance).title}
            </li>
          ))}
        </ul>

        <button type="submit">Crear</button>
      </form>
    )
  }
}

