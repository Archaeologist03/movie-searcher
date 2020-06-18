import axios from 'axios';

import { TMDB_BASE_URL } from '../constants/urls';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const instance = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: `${TMDB_API_KEY}`,
  },
});

export default instance;
