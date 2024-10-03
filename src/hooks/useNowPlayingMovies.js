import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { nowPlayingUrl, API_OPTIONS } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(nowPlayingUrl, API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlaying(json?.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
