import { useCallback, useEffect, useRef } from "react";
import { useIsVisible } from "../../customHooks/useIsVisible";

const LazyVideo = ({ src, poster, style, alt, onLoadedData }) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    },
    false,
  );

  const videoRef = useRef();

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current.play();
    } catch (e) {}
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);
  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        minHeight: "50px",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={false}
        preload="none"
        playsInline
        poster={poster}
        aria-label={alt}
        onLoadedData={onLoadedData}
        style={{
          objectFit: "cover",
          display: "block",
          width: "100%",
          height: "100%",
          ...style,
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
};

export default LazyVideo;
