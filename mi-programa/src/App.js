import React, { Component } from "react";
import "./App.css";
import { NavBar, Icon } from "antd-mobile";
import { Switch, Route, Redirect } from "react-router-dom";
import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          mode="light"
          rightContent={[ <Icon key="1" type="plus" style={{color:'white'}}/>]}>
        </NavBar>
        <Switch>
          <Route exact path="/active-performance" component = { Board }/>
        </Switch>

      </div>
    );
  }
}

export default App;

