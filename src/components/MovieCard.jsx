import "./MovieCard.css";
// eslint-disable-next-line react/prop-types
function MovieCard({ name, description }) {
  return (
    <div className="movcardGlobal">
      <h5 className="movcardh5">{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default MovieCard;
