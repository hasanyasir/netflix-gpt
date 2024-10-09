import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className=" bg-black">
        <div className="pl-4 -mt-72 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlaying} />
          <MovieList title={"Popular"} movies={movies?.popular} />
          <MovieList title={"Documentories"} movies={movies?.nowPlaying} />
          <MovieList title={"Horror"} movies={movies?.nowPlaying} />
          <MovieList title={"Trending"} movies={movies?.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
