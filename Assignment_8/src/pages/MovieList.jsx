import React from "react";
import movies from "../data/movies";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg p-2 text-center cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-[80px] h-48 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
