import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import './App.css';
import { getAllMovies } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      loginData: {},
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

  render() { 
    return(
      <main className="App">
        {/* <Header toggleLoginView={this.toggleLoginView} /> */}
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
