import React, { useEffect } from "react";
import { useRef } from "react";
import { mainVideo } from "../../assets/videos/index";

const BgVideo = ({ setChangeVideo }) => {
  const cursor = useRef(null);
  const containerRef = useRef(null);

  const mouseMovment = (e) => {
    const container = containerRef.current;
    const cordiatnesCon = container.getBoundingClientRect();

    const target = cursor.current;
    target.style.transition = "none";
    target.style.top = `${e.clientY - cordiatnesCon.top}px`;
    target.style.left = `${e.clientX - cordiatnesCon.left}px`;
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
      className={`h-screen w-full cursor-none bg-red-300`}
      onMouseMove={mouseMovment}
      onMouseOut={mouseOut}
      onClick={() => setChangeVideo(true)}
      ref={containerRef}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      <video
        className="h-full w-full object-cover"
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
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white">
          <span className="text-center font-semibold uppercase leading-4">
            Watch <br /> reel
          </span>
        </div>

        <div className="mt-3 text-center font-semibold uppercase leading-4 text-white">
          <span>Basic/Dept &#174;</span>
          <br />
          <span>2010-&#8734;</span>
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
