import React from "react";
import { mainVideo } from "../assets/videos";

const MainSection = () => {
  return (
    <main>
      <div className="w-full h-screen overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <video
          className="w-full h-full object-cover"
          preload="auto"
          autoPlay
          loop
          muted
        >
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </main>
  );
};

export default MainSection;
