import React from 'react';
import  { render, screen } from '@testing-library/react';
import ShowPage from './ShowPage';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('ShowPage', () => {
  const movieData = {
    "id": 694919,
    "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    "title": "Money Plane",
    "average_rating": 9,
    "release_date": "2020-09-29"
  }

  beforeEach(() => {
    render(<ShowPage movie={movieData}/>);
  });

  it('should render ShowPage', () => {
    expect(screen.getByText('Money Plane')).toBeInTheDocument();
    expect(screen.getByText('2020-09-29')).toBeInTheDocument();
    expect(screen.getByAltText('694919-movie-backdrop')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg');
  });
});