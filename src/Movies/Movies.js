import React from 'react';
import { Link } from 'react-router-dom';
import './movies.css';
import PropTypes from 'prop-types'

function Movies(props) {
  let userRatings = props.moviesList.reduce((totalRatings, currentMovie) => {
    let currentRating;
    if (props.userRatings.hasOwnProperty("ratings")) {
      currentRating = props.userRatings.ratings.find(rating => rating.movie_id === currentMovie.id);
    }
    if (currentRating && props.loggedIn.hasOwnProperty("user")) {
      totalRatings[currentMovie.id] = currentRating.rating;
    } else if (props.loggedIn) {
      totalRatings[currentMovie.id] = "You haven't rated this yet!";
    }
    return totalRatings;
  }, {})

  const moviesToDisplay = props.moviesList.map((movie, index) => {
    return (
      <section key={index} className="grid-item" id={movie.id.toString()}>
        <Link to={`/movies/${movie.id}`}>
          <img 
            id={movie.id.toString() + "-image"} 
            alt={movie.id.toString() + '-movie-poster-thumbnail'} 
            src={movie.poster_path}
          />
        </Link>
        <h3 className="movie-title">{movie.title}</h3>
        <h3 className="movie-rating">Average rating: {Number(movie.average_rating).toFixed(2)}</h3>
        {userRatings[movie.id] && <h3 className="user-ratings">Your rating: {userRatings[movie.id]}</h3>}
      </section>
    )
  })
  return (
    <section className='movies-container'>
      {moviesToDisplay.length ? moviesToDisplay : <h1>Please wait, loading movies</h1>}
    </section>
  )
}

Movies.propTypes = {
  moviesList: PropTypes.array,
  userRatings: PropTypes.object,
  loggedIn: PropTypes.object,
}

export default Movies;