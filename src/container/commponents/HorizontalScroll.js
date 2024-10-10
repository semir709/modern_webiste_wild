import { useEffect, useRef, useState } from "react";
import { useDragScroll } from "../../customHooks/useDragScroll";
import { Link } from "react-router-dom";
import CustomDragMouse from "./CustomDragMouse";

const HorizontalScroll = ({ data }) => {
  const trackRef = useRef();
  const thumbRef = useRef();
  const contentRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  useDragScroll(contentRef);

  const handleScrollContent = () => {
    // if (!isDragging) return;
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
        className="-mb-5 mr-4 flex h-full gap-x-14 overflow-auto px-[3.5%] py-8"
        ref={contentRef}
        onScroll={handleScrollContent}
        // onMouseDown={() => setIsDragging(true)}
        // onMouseUp={() => setIsDragging(false)}
        // onMouseLeave={() => setIsDragging(false)}
      >
        {data.map(({ Image, title, content }, index) => (
          <div className="bg-green300 m-5 min-w-[360px] select-none">
            <figure className="mb-5 h-16">{<Image />}</figure>
            <div className="w-[30px] bg-customBlack p-[0.05rem]"></div>
            <div className="mt-24">
              <h5 className="mb-5 text-2xl">{title}</h5>
              <p>
                {content}
                <Link className="underline underline-offset-4">here</Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 z-50 h-[.2rem] w-[90%] -translate-x-1/2 bg-gray-300">
        <div className="absolute left-0 top-0 h-full w-full" ref={trackRef} />
        <div className="absolute left-0 h-full bg-customBlack" ref={thumbRef} />
      </div>
    </div>
  );
};

export default HorizontalScroll;
