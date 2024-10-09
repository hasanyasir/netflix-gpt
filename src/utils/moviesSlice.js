import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailerVideo, addPopular } =
  moviesSlice.actions;

export default moviesSlice.reducer;
