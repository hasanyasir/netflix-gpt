import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideoKey } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getTrailerVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    //console.log(json);
    const filterResults = json?.results.filter((m) => m.type === "Trailer");
    const trailer = filterResults.length ? filterResults[0] : json.results[0];
    dispatch(addTrailerVideoKey(trailer));
    //console.log(trailerVideo[0].key);
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};

export default useMovieTrailer;
