import moviesTypes from './moviesTypes';

export const fetchMovies = () => ({
  type: moviesTypes.FETCH_MOVIES,
});

export const fetchPopularMovies = (endpoint: string) => ({
  type: moviesTypes.FETCH_POPULAR_MOVIES,
  endpoint,
});
