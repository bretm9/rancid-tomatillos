export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
}
  
export const postLogin = (loginData) => {
  let init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  };
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', init)
  .catch(err => console.log(err))
}

export const getUserRatings = (userId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`)
  .catch(err => console.log(err))
}

export const postUserRating = (userId, ratingData) => {
  let init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify(ratingData)
  };
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, init)
  .catch(err => console.log(err))
}

export const deleteUserRating = (userId, ratingId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${ratingId}`, { method: 'delete' })
}

// export const getMovieDetails = (movieId) => {
//   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
//   .then(response => response.json())
// }