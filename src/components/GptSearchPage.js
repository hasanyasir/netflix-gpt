import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACKGROUND_IMG} alt="background"></img>
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearchPage;
