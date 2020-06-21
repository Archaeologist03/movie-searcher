import moviesTypes from '../moviesTypes';
import moviesReducer, { I_INITIAL_STATE } from '../moviesReducer';

const INITIAL_STATE: I_INITIAL_STATE = {
  popular: null,
  error: null,
};

describe('POPULAR MOVIES', () => {
  const mockedPopularMoviePayload = {
    popularity: 1,
    vote_count: 1,
    video: true,
    poster_path: 'string',
    id: 1,
    adult: true,
    backdrop_path: 'string',
    original_language: 'string',
    original_title: 'string',
    genre_ids: [],
    title: 'string',
    vote_average: 1,
    overview: 'string',
    release_date: 'string',
  };

  it('should return initial state', () => {
    const action = { type: 'non existent', payload: {} };
    expect(moviesReducer(undefined, action)).toEqual(INITIAL_STATE);
  });

  it('should have payload with movies on successful fetch', () => {
    const action = {
      type: moviesTypes.FETCH_POPULAR_MOVIES_SUCCESS,
      payload: mockedPopularMoviePayload,
    };

    expect(moviesReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      popular: mockedPopularMoviePayload,
      error: null,
    });
  });
});
