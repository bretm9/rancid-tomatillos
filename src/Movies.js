import React from 'react';

function Movies(props) {
  const moviesToDisplay = props.moviesList.map((movie, index) => {
    return (
      <section className="grid-item" id={movie.id.toString()}>
        <img src={movie.poster_path}/>
        <h3 className="movie-title">{movie.title}</h3>
        <h3 className="movie-rating">{movie.average_rating}</h3>
      </section>
    )
  })
  return (
    <section>
      {moviesToDisplay}
    </section>
  )
}

export default Movies;