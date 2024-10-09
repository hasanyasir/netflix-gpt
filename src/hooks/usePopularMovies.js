import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { popularUrl, API_OPTIONS } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const data = await fetch(popularUrl, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopular(json?.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
