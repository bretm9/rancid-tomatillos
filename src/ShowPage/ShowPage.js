import React, { Component } from "react";
import { getMovieDetails, postUserRating, deleteUserRating } from "../apiCalls";

class ShowPage extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: "",
      selectedRating: ""
    }
  }

  componentDidMount() {
    if (this.props.movie) {
      this.setMovieDetails();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.movie !== prevProps.movie) {
      this.setMovieDetails();
    }
  }

  setMovieDetails() {
    getMovieDetails(this.props.movie.id)
    .then(data => this.setState({movieDetails: data.movie}));
  }

  updateRatingSelection = (event) => {
    this.setState({selectedRating: event.target.value});
  }

  updateRating = async () => {
    const ratingData = { movie_id: this.props.movie.id, rating: +this.state.selectedRating };
    if (this.findRating()) {
      await this.removeRating();
    }
    await postUserRating(this.props.loginData.user.id, ratingData);
    this.props.updateUserRatings();
  }

  removeRating = async () => {
    const movieRating = this.findRating()
    await deleteUserRating(this.props.loginData.user.id, movieRating.id);
    this.props.updateUserRatings()
  }

  findRating = () => {
    return this.props.userRatings.ratings.find(rating => rating.movie_id === this.props.movie.id)
  }

  getRatingNumber = () => {
    const movieRating = this.findRating()
    if (movieRating) {
      return Number(movieRating.rating).toFixed(2);
    } else {
      return "You haven't rated this yet!";
    }
  }
  
  render() {
    if (this.state.movieDetails) {
      return (
        <section>
          <h1>{this.props.movie.title}</h1>
          <img src={this.props.movie.backdrop_path} alt={this.props.movie.id + '-movie-backdrop'}></img>
          <p>{this.state.movieDetails.overview}</p>
          <p>{this.state.movieDetails.release_date}</p>
          <h3>General Info:</h3>
          <p>Runtime: {this.state.movieDetails.runtime}</p>
          <p>Budget: {this.state.movieDetails.budget}</p>
          <p>Revenue: {this.state.movieDetails.revenue}</p>
          <p>Tagline: {this.state.movieDetails.tagline}</p>
          <p>Average rating: {this.state.movieDetails.average_rating}</p>
          {this.props.userRatings && <p>Your rating: {this.getRatingNumber()}</p>}
          {this.props.userRatings && <select onChange={this.updateRatingSelection}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>}
          {this.props.userRatings && <button onClick={this.updateRating}>Add rating</button>}
          {this.props.userRatings && <button onClick={this.removeRating}>Remove rating</button>}
        </section>
      )
    } else {
      return (
        <section>
          <h1>Movie not found!</h1>
        </section>
      )
    }
  }
}


export default ShowPage