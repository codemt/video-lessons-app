import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import VideoSlider from './components/videoslider';
import BasicsHeader from './components/basicsheader';
import NavBar from './components/navbar';
import './stylesheets/slider.css';
import FullView from './components/modal';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <BasicsHeader />
        <VideoSlider />
        <Route exact path="/forwards" component={FullView} />


      </div>
      </Router>
    );
  }
}

export default App;
