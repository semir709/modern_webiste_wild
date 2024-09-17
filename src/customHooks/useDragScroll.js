import { useCallback, useEffect } from "react";

export const useDragScroll = (contentRef) => {
  const handleMouseDown = useCallback(
    (e) => {
      const node = contentRef.current;
      if (!node) {
        return;
      }
      const startPos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      const handleMouseMove = (e) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        node.scrollTop = startPos.top - dy;
        node.scrollLeft = startPos.left - dx;
        updateCursor(node);
      };

      const handleMouseUp = () => {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseup", handleMouseUp);
        node.removeEventListener("mouseleave", handleMouseLeave);
        resetCursor(node);
      };

      const handleMouseLeave = () => {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseup", handleMouseUp);
        node.removeEventListener("mouseleave", handleMouseLeave);
        resetCursor(node);
      };

      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseup", handleMouseUp);
      node.addEventListener("mouseleave", handleMouseLeave);
    },
    [contentRef],
  );

  const handleTouchStart = useCallback(
    (e) => {
      const node = contentRef.current;
      if (!node) {
        return;
      }
      const touch = e.touches[0];
      const startPos = {
        left: node.scrollLeft,
        top: node.scrollTop,
        x: touch.clientX,
        y: touch.clientY,
      };

      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const dx = touch.clientX - startPos.x;
        const dy = touch.clientY - startPos.y;
        node.scrollTop = startPos.top - dy;
        node.scrollLeft = startPos.left - dx;
        updateCursor(node);
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
        resetCursor(node);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    },
    [contentRef],
  );

  const updateCursor = (ele) => {
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
  };

  const resetCursor = (ele) => {
    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  useEffect(() => {
    const node = contentRef.current;
    if (!node) {
      return;
    }

    node.addEventListener("mousedown", handleMouseDown);
    node.addEventListener("touchstart", handleTouchStart);

    return () => {
      node.removeEventListener("mousedown", handleMouseDown);
      node.removeEventListener("touchstart", handleTouchStart);
    };
  }, [contentRef, handleMouseDown, handleTouchStart]);
};
