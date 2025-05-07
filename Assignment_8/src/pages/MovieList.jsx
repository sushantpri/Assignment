import React from "react";
import movies from "../data/movies";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="border p-2 text-center cursor-pointer hover:shadow-md"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-semibold">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
