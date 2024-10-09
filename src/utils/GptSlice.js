import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});

export const { toggleGptSearchView } = GptSlice.actions;

export default GptSlice.reducer;
