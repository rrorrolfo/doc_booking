import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Fiters";
import DoctorResults from "./components/results/DoctorResults";
import Success from "./components/Success";


class App extends Component {

  state = {
    doctorResults: "",
    noResults: true,
    isMainPage: true
  }

  assignResults = speciality => {
    const results = require(`./data/${speciality}.json`)[`${speciality}`];

    this.setState({
      doctorResults: results,
      noResults: false,
      isMainPage: false
    })

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div id="content_wrapper">
            <Nav />
            <Filters displayResults={ this.assignResults } isLanding= { this.state.isMainPage }/>
            <Dashboard />
            <Route exact path="/" render={ () => <DoctorResults  results= { this.state.doctorResults } emptyResults={ this.state.noResults } /> }/>
            <Route path="/success" component={ Success }/>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
