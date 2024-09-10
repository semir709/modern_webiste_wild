import { useCallback, useEffect, useRef } from "react";

const HorizontalScroll = () => {
  const contentRef = useRef();
  const trackRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const handleResize = () => updateThumb();
    window.addEventListener("resize", handleResize);
    updateThumb();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateThumb = () => {
    const thumbEle = thumbRef.current;
    const contentEle = contentRef.current;
    if (!thumbEle || !contentEle) {
      return;
    }

    const thumbWidth =
      (contentEle.clientWidth / contentEle.scrollWidth) *
      trackRef.current.clientWidth;

    thumbEle.style.width = `${thumbWidth}px`;
    handleScrollContent(); // Update thumb position
  };

  const handleScrollContent = () => {
    const thumbEle = thumbRef.current;
    const contentEle = contentRef.current;
    const trackEle = trackRef.current;

    if (!thumbEle || !contentEle || !trackEle) return;

    // Calculate the percentage of how far the content has scrolled
    const scrollPercentage =
      (contentEle.scrollLeft * 100) /
      (contentEle.scrollWidth - contentEle.clientWidth);

    // Calculate thumb width in percentage relative to the track
    const thumbWidthPercentage =
      (thumbEle.clientWidth * 100) / trackEle.clientWidth;

    // Adjust thumb's left position based on the scroll percentage,
    // ensuring it stops at the end where its right side is aligned with the end of the track
    const maxLeft = 100 - thumbWidthPercentage; // The farthest the left can go
    const thumbLeftPercentage = Math.min(scrollPercentage, maxLeft);

    thumbEle.style.left = `${thumbLeftPercentage}%`;
    // if (!thumbEle || !contentEle) {
    //   return;
    // }

    // let { width, left } = thumbEle.getBoundingClientRect();
    // console.log(width);
    // thumbEle.style.left = `${(contentEle.scrollLeft * 100) / contentEle.scrollWidth}%`;
    // thumbEle.style.left = `${(contentEle.scrollLeft * 100) / (contentEle.scrollWidth - contentEle.clientWidth)}%`;
    // const maxLeft = 90; // Max percentage for the thumb
    // const scrollLeftPercentage =
    //   (contentEle.scrollLeft * 100) /
    //   (contentEle.scrollWidth - contentEle.clientWidth);

    // // Clamp the percentage to ensure it doesn't go beyond 100%
    // thumbEle.style.left = `${Math.min(scrollLeftPercentage, maxLeft)}%`;
    // const scrollLeftPercentage =
    //   (contentEle.scrollLeft * 100) /
    //   (contentEle.scrollWidth - contentEle.clientWidth);

    // const thumbWidthPercentage =
    //   (thumbEle.clientWidth * 100) / trackEle.clientWidth;

    // const maxLeft = 100 - thumbWidthPercentage; // The farthest the left can go
    // const thumbLeftPercentage = Math.min(scrollPercentage, maxLeft);

    // thumbEle.style.left = `${thumbLeftPercentage}%`;

    // Adjust thumb's left position to ensure the right side of the thumb stays within the track
    // const adjustedLeft = Math.min(
    //   scrollLeftPercentage,
    //   100 - thumbWidthPercentage,
    // );
    // thumbEle.style.left = `${adjustedLeft}%`;
    // if (adjustedLeft === 100 - thumbWidthPercentage) {
    //   contentEle.scrollLeft = contentEle.scrollWidth - contentEle.clientWidth;
    // }

    // thumbEle.style.left = `${Math.min(scrollLeftPercentage, 50)}%`;
    // thumbEle.style.left = `${scrollLeftPercentage}%`;
  };

  const handleClickTrack = (e) => {
    const trackEle = trackRef.current;
    const contentEle = contentRef.current;
    if (!trackEle || !contentEle) {
      return;
    }
    const bound = trackEle.getBoundingClientRect();
    const percentage = (e.clientX - bound.left) / bound.width;
    contentEle.scrollLeft =
      percentage * (contentEle.scrollWidth - contentEle.clientWidth);
  };

  const handleMouseDown = useCallback((e) => {
    const ele = thumbRef.current;
    const contentEle = contentRef.current;
    if (!ele || !contentEle) {
      return;
    }
    const startPos = {
      left: contentEle.scrollLeft,
      x: e.clientX,
      y: e.clientY,
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const scrollRatio = contentEle.clientWidth / contentEle.scrollWidth;
      contentEle.scrollLeft = startPos.left + dx / scrollRatio;
      updateCursor(ele);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      resetCursor(ele);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  // cursor style updates
  const updateCursor = (ele) => {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const resetCursor = (ele) => {
    ele.style.cursor = "grab";
    ele.style.userSelect = "";
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  const handleTouchStart = useCallback((e) => {
    const ele = thumbRef.current;
    const contentEle = contentRef.current;
    if (!ele || !contentEle) {
      return;
    }
    const touch = e.touches[0];
    const startPos = {
      left: contentEle.scrollLeft,
      x: touch.clientX,
      y: touch.clientY,
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;
      const scrollRatio = contentEle.clientWidth / contentEle.scrollWidth;
      // const scrollRatio =
      //   contentEle.clientWidth /
      //   (contentEle.scrollWidth - contentEle.clientWidth);

      contentEle.scrollLeft = startPos.left + dx / scrollRatio;
      updateCursor(ele);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      resetCursor(ele);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  }, []);

  return (
    <div className="overflow- relative h-96 border border-slate-300">
      <div
        className="w-full overflow-auto p-2 pr-4"
        ref={contentRef}
        onScroll={handleScrollContent}
      >
        <div className="flex">
          {Array(20)
            .fill(0)
            .map((_, index) => {
              if (index >= 19) {
                return (
                  <p className="mb-2 min-w-[240px] bg-green-300" key={index}>
                    Very seasons dominion set abundantly over. Unto morning
                    years man you night our without. Won't days. Fruitful
                    firmament moveth man fruit, from, day it, gathered second
                    also night given there fly us was whose. Image after you
                    also. Likeness, without second fifth own wherein fifth
                    fourth. Spirit female living together don't evening darkness
                    creeping beginning living own beginning itself brought third
                    face them bring saying creeping green.{index}
                  </p>
                );
              } else
                return (
                  <p className="mb-2 min-w-[240px]" key={index}>
                    Very seasons dominion set abundantly over. Unto morning
                    years man you night our without. Won't days. Fruitful
                    firmament moveth man fruit, from, day it, gathered second
                    also night given there fly us was whose. Image after you
                    also. Likeness, without second fifth own wherein fifth
                    fourth. Spirit female living together don't evening darkness
                    creeping beginning living own beginning itself brought third
                    face them bring saying creeping green.{index}
                  </p>
                );
            })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-3 w-full border-l-0 bg-slate-100">
        <div
          className="absolute left-0 top-0 h-full w-full bg-red-300"
          ref={trackRef}
          onClick={handleClickTrack}
        />
        <div
          className="absolute left-0 h-full cursor-grab rounded-full bg-slate-400"
          ref={thumbRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          // style={{
          //   width: thumbRef.current ? thumbRef.current.style.width : "auto",
          // }} // Ensure thumb width is applied
        />
        {/* <div
          className="absolute left-0 h-full w-11 cursor-grab rounded-full bg-slate-400"
          ref={thumbRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        /> */}
      </div>
    </div>
  );
};

export default HorizontalScroll;
