import moviesTypes from '../moviesTypes';
import { fetchPopularMovies } from '../moviesActions';

describe('POPULAR MOVIES', () => {
  it('should have correct type within created action', () => {
    const action = fetchPopularMovies();
    expect(action.type).toEqual(moviesTypes.FETCH_POPULAR_MOVIES);
  });
});
