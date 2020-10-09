import React from "react";

function ShowPage(props) {
  if (props.movie) {
    return (
      <section>
        <h1>{props.movie.title}</h1>
        <img src={props.movie.backdrop_path} alt="movie-backdrop"></img>
        <p>{props.movie.overview}</p>
        <p>{props.movie.release_date}</p>
        <h3>General Info:</h3>
        <p>Runtime: {props.movie.runtime}</p>
        <p>Budget: {props.movie.budget}</p>
        <p>Revenue: {props.movie.revenue}</p>
        <p>Tagline: {props.movie.tagline}</p>
        <p>Average rating: {props.movie.average_rating}</p>
      </section>
    )
  }
  return (
    <section>
    </section>
  )
}


export default ShowPage