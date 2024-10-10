import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CustomDragMouse = ({ children, Isfocused = false }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const customCursorRef = useRef();
  const [isMouseHover, setIsMouseHover] = useState(false);
  const containerCarouselRef = useRef();

  const handleMouseMove = (e) => {
    const target = customCursorRef.current;

    const containerCarousel =
      containerCarouselRef.current.getBoundingClientRect();

    target.style.transition = "none";
    target.style.top = `${e.clientY - containerCarousel.top}px`;
    target.style.left = `${e.clientX - containerCarousel.left}px`;
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const onMouseOut = () => {
    const target = customCursorRef.current;

    if (!target) return;

    target.style.transition = "top 0.5s ease, left 0.5s ease";
    target.style.top = `50%`;
    target.style.left = `90%`;

    setIsMouseHover(false);
    setIsMouseDown(false);
  };
  const onMouseHover = () => {
    setIsMouseHover(true);
  };

  useEffect(() => {
    const target = customCursorRef.current;
    if (!target) return;

    target.style.top = `50%`;
    target.style.left = `90%`;
  }, []);

  return (
    <div
      className={`relative h-full w-full cursor-none overflow-hidden`}
      ref={containerCarouselRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseOut}
      onMouseOver={onMouseHover}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
      <motion.div
        ref={customCursorRef}
        className={`pointer-events-none absolute flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-full ${Isfocused ? "cursor-pointer opacity-50" : ""}`}
      >
        <div>
          {isMouseDown && <IoMdArrowDropleft color="#f9cdcd" size={35} />}
        </div>
        <motion.div
          className={`flex items-center justify-center rounded-full bg-customPrimary`}
          animate={{
            width: isMouseDown ? "40%" : "60%",
            height: isMouseDown ? "40%" : "60%",
          }}
          transition={{ opacity: { duration: 0 } }}
        >
          <div className="rounde h-[50px] w-[50px] overflow-hidden">
            <motion.div
              animate={isMouseHover ? { y: "-65%" } : { y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full -translate-y-[65%] rounded-full"
            >
              {!isMouseDown && !Isfocused && (
                <div>
                  <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold uppercase text-customBlack">
                    Drag
                  </p>
                  <p className="absolute left-1/2 top-[110%] -translate-x-1/2 -translate-y-1/2 text-sm font-bold uppercase text-customBlack">
                    Drag
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        <div>
          {isMouseDown && <IoMdArrowDropright color="#f9cdcd" size={35} />}
        </div>
      </motion.div>
    </div>
  );
};

export default CustomDragMouse;
