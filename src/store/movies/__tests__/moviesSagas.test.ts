import { fetchPopularMoviesSaga } from '../moviesSagas';

describe('FETCH MOVIES SAGA', () => {
  const generator = fetchPopularMoviesSaga();

  it('should trigger fetching of movies', () => {
    //@ts-ignore
    expect(generator.next().value.type).toEqual('CALL');
  });
});
