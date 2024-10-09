export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/PK-en-20240923-TRIFECTA-perspective_76fd0616-394d-4d33-acdb-85e078b183f8_large.jpg";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/33377461?s=48&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TBMDB_KEY,
  },
};

export const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const popularUrl = "https://api.themoviedb.org/3/movie/popular?page=1";

export const MOVIE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_API_KEY;
