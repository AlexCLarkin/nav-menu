import React from "react";
import NavigationBar from "./NavigationBar";
import Route from "./Route";
import "./styles.css";
import Dashboard from "../Pages/Dashboard";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <NavigationBar />
        </div>
        <div>
          <Route path="/">
            <Dashboard />
          </Route>
        </div>
      </div>
    );
  }
}
