import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Fiters";
import DoctorResults from "./components/results/DoctorResults";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content_wrapper">
          <Nav />
          <Filters />
          <Dashboard />
          <DoctorResults />
        </div>
        
      </div>
    );
  }
}

export default App;
