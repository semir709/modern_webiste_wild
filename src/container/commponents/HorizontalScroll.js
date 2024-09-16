import { useCallback, useEffect, useRef } from "react";
import { useDragScroll } from "../../customHooks/useDragScroll";

const HorizontalScroll = () => {
  const trackRef = useRef();
  const thumbRef = useRef();
  const contentRef = useRef();

  useDragScroll(contentRef);

  const handleScrollContent = () => {
    const thumbEle = thumbRef.current;
    const contentEle = contentRef.current;
    const trackEle = trackRef.current;

    if (!thumbEle || !contentEle || !trackEle) {
      return;
    }

    // Total scrollable width excluding the visible part of the content
    const scrollableWidth = contentEle.scrollWidth - contentEle.clientWidth;

    // Thumb width as a percentage of visible content vs total scrollable content
    const thumbWidth =
      (contentEle.clientWidth / contentEle.scrollWidth) * trackEle.clientWidth;
    thumbEle.style.width = `${thumbWidth}px`;

    // Calculate the maximum scroll distance for the thumb
    const maxThumbScroll = trackEle.clientWidth - thumbWidth;

    // Calculate the percentage of content scrolled and apply it to thumb's left
    const scrollPercentage = contentEle.scrollLeft / scrollableWidth;
    thumbEle.style.left = `${scrollPercentage * maxThumbScroll}px`;
  };

  useEffect(() => {
    const thumbEle = thumbRef.current;
    const contentEle = contentRef.current;
    if (!thumbEle || !contentEle) {
      return;
    }
    const scrollRatio = contentEle.clientWidth / contentEle.scrollWidth;
    thumbEle.style.width = `${scrollRatio * 100}%`;
  }, []);

  return (
    <div className="relative h-fit overflow-hidden border-gray-300">
      <div
        className="-mb-5 mr-4 flex h-full overflow-auto px-[3.5%] py-8"
        ref={contentRef}
        onScroll={handleScrollContent}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div className="m-5 h-[400px] min-w-[400px] bg-green-300"></div>
          ))}
      </div>

      <div className="absolute bottom-0 left-1/2 h-[.2rem] w-[90%] -translate-x-1/2 bg-gray-300">
        <div className="absolute left-0 top-0 h-full w-full" ref={trackRef} />
        <div className="absolute left-0 h-full bg-customBlack" ref={thumbRef} />
      </div>
    </div>
  );
};

export default HorizontalScroll;
