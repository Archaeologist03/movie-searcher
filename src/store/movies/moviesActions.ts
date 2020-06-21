import moviesTypes from './moviesTypes';

export const fetchMovies = () => ({
  type: moviesTypes.FETCH_MOVIES,
});

export const fetchPopularMovies = () => ({
  type: moviesTypes.FETCH_POPULAR_MOVIES,
});
