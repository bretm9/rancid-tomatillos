import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import ShowPage from '../ShowPage/ShowPage';
import './App.css';
import { getAllMovies } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      loginData: {},
      selectedMovieId: 694919,
      error: ''
    }
  }

  updateLoginData = (loginData) => {
    this.setState.loginData = loginData;
  }

  componentDidMount() {
    getAllMovies()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState.error = 'YA DONE MESSED UP AY-AY-RON!')
  }

  // toggleLoginView = () => {
  //   this.setState({ isLoginView: !this.state.isLoginView})
  // }

  findMovieIndexById(id) {
    let foundMovie = this.state.movies.find(movie => {
      return movie.id === id;
    })
    return this.state.movies.indexOf(foundMovie)
  }

  render() { 
    return(
      <main className="App">
        {/* <Header toggleLoginView={this.toggleLoginView} /> */}
        <ShowPage movie={this.state.movies[this.findMovieIndexById(this.state.selectedMovieId)]} />
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        {/* {this.state.isLoginView && <Login updateLoginData={this.updateLoginData} />} */}
        <Login updateLoginData={this.updateLoginData} />
        {/* {!this.state.isLoginView && <Movies moviesList={this.state.movies} />} */}
        <Movies moviesList={this.state.movies} />
      </main>
    )
  }
}

export default App;
