import React, { useEffect, useRef, useState } from "react";
import { sideVideo } from "../../assets/videos";

function convertSecondsToMMSS(currentTime) {
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}

const MainVideo = ({ changeVideo, setChangeVideo }) => {
  const [currentTime, setCurrentTime] = useState(`00/00`);
  const [timeLength, setTimeLength] = useState(0);
  const videoRef = useRef(null);
  const refDraggableElem = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      const maxTime = convertSecondsToMMSS(video.duration);
      const currentTime = convertSecondsToMMSS(video.currentTime);

      setCurrentTime(`${currentTime}/${maxTime} `);
      const currentLength = (video.currentTime / video.duration) * 100;
      setTimeLength(currentLength);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoRef.current]);

  const moveTimeLap = () => {
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
  };

  useEffect(() => {
    const target = videoRef.current;
    if (changeVideo) {
      target.play();
    } else if (!changeVideo && target.duration === target.currentTime) {
      target.currentTime = 0;
    } else {
      target.pause();
    }
  }, [changeVideo]);

  return (
    <div className="h-screen w-full">
      <video
        className="h-full w-full object-cover"
        ref={videoRef}
        src={sideVideo}
        onClick={() => setChangeVideo(false)}
      />

      <div className="absolute bottom-5 left-0 w-full mix-blend-difference">
        <div
          style={{
            transform: `translateX(${timeLength}%)`,
            transitionDuration: "500ms",
          }}
          className={`w-full hover:cursor-grab`}
          ref={refDraggableElem}
        >
          <span
            className="block w-fit -translate-x-1/2 select-none text-lg font-semibold text-white"
            onMouseDown={moveTimeLap}
          >
            {currentTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
