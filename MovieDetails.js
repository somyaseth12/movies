import React, { useEffect, useState } from 'react';
import { getMovieDetails, getMovieReviews, getMovieVideos } from './api';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovieDetails(id);
      const reviewsData = await getMovieReviews(id);
      const videosData = await getMovieVideos(id);

      setMovie(movieData);
      setReviews(reviewsData.results);
      setVideos(videosData.results);
    };
    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const trailer = videos.find((video) => video.type === 'Trailer');

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {trailer && (
        <div>
          <h2>Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
