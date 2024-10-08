import React from "react";
import { MOVIE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-2">
      <img src={MOVIE_CDN_URL + posterPath} alt="poster"></img>
    </div>
  );
};

export default MovieCard;
