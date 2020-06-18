import React from 'react';

import instance from './apis/tmdb.instance';
import useAxios from './hooks/useTmdb';

const App: React.FC = () => {
  const [data] = useAxios(instance, '/movie/33');

  console.log(data, 12);

  return (
    <div className='App'>Yo there, check ma cricleCI + netlify. For real.</div>
  );
};

export default App;
