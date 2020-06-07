import axios from 'axios';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: `${TMDB_API_KEY}`,
  },
});
