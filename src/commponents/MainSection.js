import React, { useEffect, useRef, useState } from "react";
import { mainVideo, sideVideo } from "../assets/videos";
import { motion } from "framer-motion";
// Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";

function convertSecondsToMMSS(currentTime) {
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}

const MainSection = () => {
  const cursor = useRef(null);
  const [changeVideo, setChangeVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const target = cursor.current;
    if (target) {
      target.style.top = `50%`;
      target.style.left = `50%`;
    }
  }, [cursor.current]);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setMaxTime(convertSecondsToMMSS(video.duration));
      setCurrentTime(convertSecondsToMMSS(video.currentTime));
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef.current]);

  const mouseMovment = (e) => {
    const target = cursor.current;

    target.style.top = `${e.clientY}px`;
    target.style.left = `${e.clientX}px`;
  };

  return (
    <main>
      <div
        className="w-full h-screen overflow-hidden relative"
        onClick={() => setChangeVideo((prev) => !prev)}
      >
        <div className={`${changeVideo ? "block" : "hidden"}`}>
          <video
            className="w-full h-[30px]"
            ref={videoRef}
            autoPlay
            src={sideVideo}
          />

          <div className="p-5 m-5 w-[100px] h-[100px] bg-white">
            <div>
              <span>
                {currentTime}/{maxTime}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`cursor-none w-full h-full ${
            changeVideo ? "hidden" : "block"
          }`}
          onMouseMove={mouseMovment}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 "></div>
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

          <div
            ref={cursor}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center">
              <span className="uppercase text-center font-semibold leading-4">
                Watch <br /> reel
              </span>
            </div>

            <div className="text-white text-center uppercase font-semibold leading-4 mt-3">
              <span>Basic/Dept &#174;</span>
              <br />
              <span>2010-&#8734;</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
