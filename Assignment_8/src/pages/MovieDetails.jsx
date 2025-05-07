import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div className="p-4 text-center">Movie not found</div>;

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <img
        src={movie.image}
        alt={movie.title}
        className="w-60 h-auto mx-auto mb-4"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate(`/book/${movie.id}`)}
      >
        Book Seat
      </button>
    </div>
  );
};

export default MovieDetails;
