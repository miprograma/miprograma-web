import React, { Component } from "react";
import "./App.css";
import { NavBar, Icon } from "antd-mobile";
import { Switch, Route, Redirect } from "react-router-dom";
import Board from "./components/Board";
import CreateShows from "./components/CreateShows";
import CreateArtist from "./components/artist/CreateArtist"
import ControlArtistPerformance from './components/controlArtistPerformance'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar mode="light" />
        <Switch>
          <Route exact path="/active-performance" component={Board} />
          <Route exact path="/create-show" component={CreateShows} />
          <Route exact path="/create-artist" component={CreateArtist} />
          <Route exact path="/control-active" component={ControlArtistPerformance} />
        </Switch>
      </div>
    );
  }
}

export default App;
