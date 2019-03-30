import React, { Component } from "react";
import "./App.css";
import { NavBar, Icon } from "antd-mobile";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[<Icon key="1" type="ellipsis" />]}
        >
          Cardamomo Programa
        </NavBar>
        <Switch>
          {/* <Route exact path="/active-performance" component = { ActivePerformance }/> */}
        </Switch>

      </div>
    );
  }
}

export default App;
