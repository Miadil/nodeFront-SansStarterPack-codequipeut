import { useState, useEffect } from "react";
import movieApi from "../services/movieApi.js";
import MovieCard from "../components/MovieCard";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log("je suis la ");
    movieApi
      .get("/api/movie")
      .then((res) => console.log("je suis la 2 ") || setMovies(res.data))
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
