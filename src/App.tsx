import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

// import { fetchPopularMovies } from './store/movies/moviesActions';

import Header from './components/Header/Header';

const App: React.FC = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchPopularMovies('popular'));
  // }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  );
};

export default App;
