import React from 'react';
import  { render, screen } from '@testing-library/react';
import Movies from './Movies';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Movies', () => {
  const moviesListData = [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 9,
      "release_date": "2020-09-29"
      },
      {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 6,
      "release_date": "2020-09-04"
      }
  ]

  beforeEach(() => {
    render(<Movies moviesList={moviesListData} />);
  });

  it('should render movies', () => {
    expect(screen.getByText('Money Plane')).toBeInTheDocument();
    expect(screen.getByAltText('694919-movie-poster-thumbnail')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg');
  });


  // Show movie on click:

  it('should be be able to click a movie to show page', () => {
    const mockShowMovie = jest.fn();
    userEvent.click(screen.getByAltText('694919-movie-poster-thumbnail'));
    expect(mockShowMovie).toHaveBeenCalled();
    expect(mockShowMovie).toHaveBeenCalledWith(694919);
  });
});