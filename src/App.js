import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: []
    }
  }

  render() {
    return(
      <div className="App">
        <Header />
        <Movies moviesList={this.state.movies} />
      </div>
    )
  }
}

export default App;
