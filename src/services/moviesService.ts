import axiosInstance from '../apis/tmdb.instance';

// POPULAR MOVIES
export const fetchMoviesService = async (payload: string): Promise<[]> => {
  // Payload = endpoint

  const response = await axiosInstance(`/movie/${payload}`);

  return response.data.results;
};
