import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  bg-black grid grid-cols-12">
        <input
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder="What do you want to watch today?"
        ></input>
        <button className="col-span-3 py-2 px-4 m-6 bg-red-800 text-white rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
