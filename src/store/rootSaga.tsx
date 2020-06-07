import { all, call } from 'redux-saga/effects';

import { moviesSagas } from './movies/moviesSagas';

export default function* rootSaga() {
  yield all([call(moviesSagas)]);
}
