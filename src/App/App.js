import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import ShowPage from '../ShowPage/ShowPage';
import './App.css';
import { getAllMovies, getUserRatings } from '../apiCalls'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state= {
      movies: [],
      loginData: "",
      userRatings: "",
      error: ''
    }
  }

  // updateAppState = (proptery, data) => {
  //   this.setState({ [proptery]: data });
  // }

  componentDidMount() {
    getAllMovies()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState.error = 'Error: Could not get movies from server') 
  }

  componentDidUpdate(prevProps) {
    if (this.userRatings !== prevProps.userRatings) {
      this.updateUserRatings();
    }
  }

  updateUserRatings = async () => {
    let resolvedUserRatings = await getUserRatings(this.state.loginData.user.id)
    let parsedUserRatings = await resolvedUserRatings.json()
    if (resolvedUserRatings.ok) {
      this.updateAppState('userRatings', parsedUserRatings);
    } else {
      this.state.error = "Error: Could not get user ratings from server"
    }
  }

  render() { 
    return(
      <main className="App">
        <Header loginData={this.state.loginData}/>
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route 
          path="/movies/:id" 
          render={({ match }) => {
            const selectedMovie = this.state.movies.find(movie => movie.id === +match.params.id)
            return (
              <ShowPage 
                movie={selectedMovie} 
                userRatings={this.state.userRatings} 
                loginData={this.state.loginData}
                updateUserRatings={this.updateUserRatings}
              />
            )
          }} 
        />
        <Route exact path="/login" render={() => <Login updateAppState={this.updateAppState}/>} />
        <Route exact path="/" render={() => <Movies moviesList={this.state.movies} userRatings={this.state.userRatings} loggedIn={this.state.loginData} />} />
      </main>
    )
  }
}

export default App;
