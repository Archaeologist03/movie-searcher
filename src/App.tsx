import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchPopularMovies } from './store/movies/moviesActions';

const App: React.FC = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchPopularMovies('popular'));
  // }, [dispatch]);

  return (
    <div className='App'>Yo there, check ma cricleCI + netlify. For real.</div>
  );
};

export default App;
