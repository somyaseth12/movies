import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from TMDb', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  return fetchMovies(`movie/${movieId}`);
};

export const getPopularMovies = async () => {
  return fetchMovies('movie/popular');
};

export const getMovieReviews = async (movieId) => {
  return fetchMovies(`movie/${movieId}/reviews`);
};

export const getMovieVideos = async (movieId) => {
  return fetchMovies(`movie/${movieId}/videos`);
};
