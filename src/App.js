import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.state.error = 'YA DONE MESSED UP AY-AY-RON!')
  }

  render() {
    return(
      <main className="App">
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Movies moviesList={this.state.movies} />
      </main>
    )
  }
}

export default App;
