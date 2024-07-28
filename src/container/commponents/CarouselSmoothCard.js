import { useEffect, useRef, useState } from "react";
import { SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CarouselSmoothCard = () => {
  const carouselContainerRef = useRef();
  const customCursorRef = useRef();
  const containerCarouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [keyChange, setKeyChange] = useState(1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [textHover, setTextHover] = useState(false);

  useEffect(() => {
    const target = carouselContainerRef.current;

    setWidth(target.scrollWidth - target.offsetWidth);
  }, []);

  const whileMouseMove = (e) => {
    const target = customCursorRef.current;
    const containerCarousel =
      containerCarouselRef.current.getBoundingClientRect();

    target.style.transition = "none";
    target.style.top = `${e.clientY - containerCarousel.top}px`;
    target.style.left = `${e.clientX}px`;
  };

  useEffect(() => {
    const target = customCursorRef.current;
    if (target) {
      target.style.top = `50%`;
      target.style.left = `90%`;
    }
  }, [customCursorRef.current]);

  const onMouseOut = () => {
    const target = customCursorRef.current;

    target.style.transition = "top 0.5s ease, left 0.5s ease";
    target.style.top = `50%`;
    target.style.left = `90%`;

    setIsMouseHover(false);
  };

  const whenMouseHover = () => {
    setIsMouseHover(true);
  };

  useEffect(() => {
    setKeyChange((prev) => prev + 1);
  }, [isMouseHover]);

  const wheMouseDown = () => {
    setIsMouseDown(true);
  };

  const whenMouseUp = () => {
    setIsMouseDown(false);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1270);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative h-full w-full text-customPrimary ${
        !isMobile && (textHover ? "" : "cursor-none")
      }`}
      ref={containerCarouselRef}
      onMouseMove={whileMouseMove}
      onMouseLeave={onMouseOut}
      onMouseOver={whenMouseHover}
      onMouseDown={wheMouseDown}
      onMouseUp={whenMouseUp}
    >
      <motion.ol
        ref={carouselContainerRef}
        className="grid h-full grid-cols-2 min-[1270px]:flex"
        drag={!isMobile ? "x" : false}
        dragConstraints={{ right: 0, left: -width }}
        // dragElastic={0.1}
        transition={{ duration: 0.3, ease: "linear" }}
        initial={{ x: "20%" }}
        animate={{ x: 0 }}
      >
        {[1, 2, 3, 4, 5].map((el, index) => (
          <SmoothCard setTextHover={setTextHover} url={"/winter"} />
        ))}
      </motion.ol>
      <motion.div
        ref={customCursorRef}
        className="pointer-events-none absolute z-50 hidden -translate-x-1/2 -translate-y-1/2 items-center min-[1270px]:flex"
      >
        <div className="">{isMouseDown && <IoMdArrowDropleft size={35} />}</div>
        <motion.div
          className="mx-2 flex items-center justify-center rounded-full bg-customPrimary"
          animate={{
            width: isMouseDown ? "65px" : "125px",
            height: isMouseDown ? "65px" : "125px",
            opacity: textHover ? 0.6 : 1,
          }}
          transition={{ opacity: { duration: 0 } }}
        >
          <div className="h-[50px] w-[50px] overflow-hidden">
            <motion.div
              key={keyChange}
              animate={isMouseHover && { y: "-65%" }}
              transition={{ duration: 0.1 }}
              className="relative h-full w-full -translate-y-[65%]"
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
        <div className="">
          {isMouseDown && <IoMdArrowDropright size={35} />}
        </div>
      </motion.div>
    </div>
  );
};

export default CarouselSmoothCard;
