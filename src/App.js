import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content_wrapper">
          <Nav />
          <div>Filters</div>
          <Dashboard />

        </div>
        
      </div>
    );
  }
}

export default App;
