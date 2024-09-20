import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CustomDragMouse = () => {
  const [keyChange, setKeyChange] = useState(1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const customCursorRef = useRef();
  const [textHover, setTextHover] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const containerCarouselRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const whileMouseMove = (e) => {
    const target = customCursorRef.current;
    const containerCarousel =
      containerCarouselRef.current.getBoundingClientRect();

    target.style.transition = "none";
    target.style.top = `${e.clientY - containerCarousel.top}px`;
    target.style.left = `${e.clientX}px`;
  };

  const wheMouseDown = () => {
    setIsMouseDown(true);
  };

  const whenMouseUp = () => {
    setIsMouseDown(false);
  };
  const onMouseOut = () => {
    const target = customCursorRef.current;

    target.style.transition = "top 0.5s ease, left 0.5s ease";
    target.style.top = `50%`;
    target.style.left = `90%`;

    setIsMouseHover(false);
    setIsMouseDown(false);
  };
  const whenMouseHover = () => {
    setIsMouseHover(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1270);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return;

  return (
    <div
      className={`absolute left-0 top-0 h-full w-full cursor-none`}
      ref={containerCarouselRef}
      onMouseMove={whileMouseMove}
      onMouseLeave={onMouseOut}
      onMouseOver={whenMouseHover}
      onMouseDown={wheMouseDown}
      onMouseUp={whenMouseUp}
    >
      <motion.div
        ref={customCursorRef}
        className="pointer-events-none absolute z-50 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 select-none items-center justify-between rounded-full"
      >
        <div>{isMouseDown && <IoMdArrowDropleft size={35} />}</div>
        <motion.div
          className="flex items-center justify-center rounded-full bg-customPrimary"
          animate={{
            width: isMouseDown ? "40%" : "60%",
            height: isMouseDown ? "40%" : "60%",
            opacity: textHover ? 0.6 : 1,
          }}
          transition={{ opacity: { duration: 0 } }}
        >
          <div className="rounde h-[50px] w-[50px] overflow-hidden">
            <motion.div
              key={keyChange}
              animate={isMouseHover ? { y: "-65%" } : { y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full -translate-y-[65%] rounded-full"
            >
              {!isMouseDown && !textHover && (
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
        <div>{isMouseDown && <IoMdArrowDropright size={35} />}</div>
      </motion.div>
    </div>
  );
};

export default CustomDragMouse;
