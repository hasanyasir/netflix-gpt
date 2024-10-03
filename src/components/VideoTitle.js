import React from "react";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-left black pt-40 px-20 absolute text-white">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="w-1/4 py-6">{desc}</p>
      <div>
        <button className="m-2 px-4 py-2 bg-white w-28 text-black text-lg rounded-lg hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="m-2 px-4 py-2 bg-black w-28 text-white text-lg opacity-70 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
