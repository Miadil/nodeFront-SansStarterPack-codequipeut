import { useState, useEffect } from "react";
import movieApi from "../services/movieApi";
import MovieCard from "../components/MovieCard";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieApi
      .get("/api/movie")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      <div className="movieGlobalList">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
