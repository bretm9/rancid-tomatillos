import React from 'react';
import './movies.css';

function Movies(props) {
  const moviesToDisplay = props.moviesList.map((movie, index) => {
    return (
      <section key={index} className="grid-item" id={movie.id.toString()}>
        <img alt="movie-thumbnail-img" src={movie.poster_path}/>
        <h3 className="movie-title">{movie.title}</h3>
        <h3 className="movie-rating">{movie.average_rating}</h3>
      </section>
    )
  })
  return (
    <section className='movies-container'>
      {moviesToDisplay}
    </section>
  )
}

export default Movies;