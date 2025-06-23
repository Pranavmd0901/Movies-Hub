import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();

    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  // TMDB-specific image handling
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path
    ? IMAGE_BASE_URL + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
