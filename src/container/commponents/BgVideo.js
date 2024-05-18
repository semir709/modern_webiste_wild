import React, { useEffect } from "react";
import { useRef } from "react";
import { mainVideo } from "../../assets/videos/index";

const BgVideo = ({ setChangeVideo }) => {
  const cursor = useRef(null);

  const mouseMovment = (e) => {
    const target = cursor.current;
    target.style.transition = "none";
    target.style.top = `${e.clientY}px`;
    target.style.left = `${e.clientX}px`;
  };

  const mouseOut = () => {
    const target = cursor.current;

    target.style.transition = "top 0.5s ease, left 0.5s ease";
    target.style.top = `50%`;
    target.style.left = `50%`;
  };

  useEffect(() => {
    const target = cursor.current;
    if (target) {
      target.style.top = `50%`;
      target.style.left = `50%`;
    }
  }, [cursor.current]);

  return (
    <div
      className={`cursor-none w-full h-screen`}
      onMouseMove={mouseMovment}
      onMouseOut={mouseOut}
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
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2  "
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
  );
};

export default BgVideo;
