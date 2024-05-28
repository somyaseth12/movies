import React, { useEffect, useState } from 'react';
import { getPopularMovies } from './api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
