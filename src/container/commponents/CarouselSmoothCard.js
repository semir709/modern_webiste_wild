import { useEffect, useRef, useState } from "react";
import { CustomDragMouse, SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CarouselSmoothCard = () => {
  const carouselContainerRef = useRef();
  // const customCursorRef = useRef();
  // const containerCarouselRef = useRef();
  const [width, setWidth] = useState(0);
  // const [isMouseHover, setIsMouseHover] = useState(false);
  // const [keyChange, setKeyChange] = useState(1);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [textHover, setTextHover] = useState(false);

  useEffect(() => {
    const target = carouselContainerRef.current;

    setWidth(target.scrollWidth - target.offsetWidth);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1270);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.ol
      ref={carouselContainerRef}
      className="flex h-full"
      drag={!isMobile ? "x" : false}
      dragConstraints={{ right: 0, left: -width }}
      // dragElastic={0.1}
      transition={{ duration: 0.3, ease: "linear" }}
      initial={{ x: "20%" }}
      animate={{ x: 0 }}
    >
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div className="me-2 min-w-[400px]">
          <SmoothCard url={"/winter"} number={index + 1} />
        </div>
      ))}
      {/* <CustomDragMouse /> */}
    </motion.ol>
  );
};

export default CarouselSmoothCard;
