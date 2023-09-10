import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg w-1/3 py-6">{overview}</p>
      <div className="flex">
        <button className="bg-[#e3e3e3] mx-2 flex  items-center gap-1 text-black font-bold px-12 rounded p-3 hover:bg-opacity-80">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white flex  items-center gap-1   font-bold px-14 rounded p-3    ">
          <AiOutlineInfoCircle /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
