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
  const [timeLength, setTimeLength] = useState(0);
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
      const maxTime = convertSecondsToMMSS(video.duration);
      const currentTime = convertSecondsToMMSS(video.currentTime);
      setMaxTime(maxTime);
      setCurrentTime(currentTime);

      const currentLength = (video.currentTime / video.duration) * 100;

      setTimeLength(parseInt(currentLength));
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
        <div className={`${changeVideo ? "block" : "hidden"} w-full h-full`}>
          <video
            className="w-full h-full object-cover"
            ref={videoRef}
            autoPlay
            loop
            src={sideVideo}
          />

          <div className="absolute bottom-5 left-0 w-full ">
            <div
              style={{ transform: `translateX(${timeLength}%)` }}
              className="hover:cursor-grab "
            >
              <span className="text-white">
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
