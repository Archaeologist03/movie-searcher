const INITIAL_STATE = {};

interface I_FetchMoviesAction {
  type: string;
}

interface I_FetchMovieAction {
  type: string;
  payload: {};
}

type Action = I_FetchMoviesAction | I_FetchMovieAction;

const moviesReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default moviesReducer;
