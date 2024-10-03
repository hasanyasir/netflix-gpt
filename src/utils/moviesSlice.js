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
    addTrailerVideoKey: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailerVideoKey } = moviesSlice.actions;

export default moviesSlice.reducer;
