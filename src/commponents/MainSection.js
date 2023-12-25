import React, { useEffect, useRef, useState } from "react";
import { mainVideo, sideVideo } from "../assets/videos";
import { motion } from "framer-motion";
// Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import Draggable from "react-draggable";

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
  const [currentTime, setCurrentTime] = useState("00/00");
  // const [maxTime, setMaxTime] = useState("00");
  const [timeLength, setTimeLength] = useState(0);
  const videoRef = useRef(null);
  const refDraggableElem = useRef(null);
  const timerElRef = useRef(null);

  useEffect(() => {
    const target = cursor.current;
    if (target) {
      target.style.top = `50%`;
      target.style.left = `50%`;
    }
  }, [cursor.current]);

  useEffect(() => {
    const video = videoRef.current;
    const draggEl = refDraggableElem.current;
    const timerRef = timerElRef.current;

    const handleTimeUpdate = () => {
      const maxTime = convertSecondsToMMSS(video.duration);
      const currentTime = convertSecondsToMMSS(video.currentTime);
      // setMaxTime(maxTime);
      setCurrentTime(`${currentTime}/${maxTime} `);

      const currentLength = (video.currentTime / video.duration) * 100;

      // console.log(timerRef.width);

      setTimeLength(currentLength);
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

  useEffect(() => {
    const target = refDraggableElem.current;
    const video = videoRef.current;

    target.addEventListener("mousedown", (e) => {
      let isDragging = true;
      let initialMouseX = e.clientX;
      let initialDivX = target.getBoundingClientRect().x;
      let timer;

      function handleDrag(e) {
        if (isDragging) {
          const newDivX = initialDivX + e.clientX - initialMouseX;

          const newPositionPercentage =
            (newDivX / target.parentElement.offsetWidth) * 100;

          const newTime = (newPositionPercentage / 100) * video.duration;

          setTimeLength(newPositionPercentage);

          clearTimeout(timer);

          timer = setTimeout(() => {
            target.style.transitionDuration = "500ms";
          }, 100);

          target.style.transitionDuration = null;

          video.currentTime = newTime;
        }
      }

      document.addEventListener("mousemove", handleDrag);

      document.addEventListener("mouseup", handleDragEnd);

      function handleDragEnd() {
        const target = refDraggableElem.current;
        isDragging = false;

        target.style.transitionDuration = "500ms";

        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
      }
    });
  }, [refDraggableElem.current]);

  return (
    <main>
      <div className="w-full h-screen  relative overflow-hidden">
        <div className={`${changeVideo ? "block" : "hidden"} w-full h-full`}>
          <video
            className="w-full h-full object-cover"
            ref={videoRef}
            src={sideVideo}
            autoPlay
            onClick={() => setChangeVideo(false)}
          />

          <div className="absolute bottom-5 left-0 w-full mix-blend-difference">
            <div
              style={{
                transform: `translateX(${timeLength}%)`,
                transitionDuration: "500ms",
              }}
              className={`hover:cursor-grab w-full`}
              ref={refDraggableElem}
            >
              <span className="text-white text-lg select-none block -translate-x-1/2 w-fit">
                {currentTime}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`cursor-none w-full h-full ${
            changeVideo ? "hidden" : "block"
          }`}
          onMouseMove={mouseMovment}
          onClick={() => setChangeVideo(true)}
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
            <div className="bg-white rounded-full w-[100px] h-[100px] flex items-center justify-center ">
              <span className="uppercase text-center font-semibold leading-4 ">
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
