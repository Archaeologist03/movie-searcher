import moviesTypes from './moviesTypes';
import { I_PopularMovie } from '../../interfaces/I_Movies';

export interface I_INITIAL_STATE {
  popular: null | [I_PopularMovie];
  error: null | {};
}

const INITIAL_STATE: I_INITIAL_STATE = {
  popular: null,
  error: null,
};

// ACTION INTERFACES
interface I_FetchMoviesAction {
  readonly type: string;
}
interface I_FetchMoviesAction {
  readonly type: string;
  readonly payload: {} | [];
}
type Action = I_FetchMoviesAction | I_FetchMoviesAction;

// REDUCER
const moviesReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case moviesTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popular: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default moviesReducer;
