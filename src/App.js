import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Fiters";
import DoctorResults from "./components/results/DoctorResults";


class App extends Component {

  state = {
    doctorResults: "",
    noResults: true
  }

  assignResults = speciality => {
    const results = require(`./data/${speciality}.json`)[`${speciality}`];

    this.setState({
      doctorResults: results,
      noResults: false
    })

  }

  render() {
    return (
      <div>
        <Header />
        <div id="content_wrapper">
          <Nav />
          <Filters displayResults={ this.assignResults }/>
          <Dashboard />
          <DoctorResults  results= { this.state.doctorResults } emptyResults={ this.state.noResults }/>
        </div>
        
      </div>
    );
  }
}

export default App;
