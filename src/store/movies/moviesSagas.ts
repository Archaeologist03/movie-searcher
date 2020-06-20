import { takeLatest, call, put } from 'redux-saga/effects';

import moviesTypes from './moviesTypes';
import { fetchMoviesService } from '../../services/moviesService';

// POPULAR MOVIES
export function* fetchPopularMoviesSaga(payload: {
  type: string;
  endpoint: string;
}) {
  try {
    // @ts-ignore
    const movies = yield call(fetchMoviesService, payload.endpoint);

    yield put({
      type: moviesTypes.FETCH_POPULAR_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (error) {
    yield put({
      type: moviesTypes.FETCH_POPULAR_MOVIES_FAIL,
      payload: error,
    });
  }
}

// Watcher Saga
export function* moviesSagas() {
  yield takeLatest(moviesTypes.FETCH_POPULAR_MOVIES, fetchPopularMoviesSaga);
}
