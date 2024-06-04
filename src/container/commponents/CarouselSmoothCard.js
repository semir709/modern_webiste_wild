import { useEffect, useRef, useState } from "react";
import { SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";

const CarouselSmoothCard = () => {
  const carouselContainerRef = useRef();
  const customCursorRef = useRef();
  const containerCarouselRef = useRef();
  const [width, setWidth] = useState(0);

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
  };

  const whenMouseDown = () => {
    const target = customCursorRef.current;
  };

  return (
    <div
      className="text-customPrimary  w-full h-full overflow-x-hidden px-[110px] relative cursor-none"
      ref={containerCarouselRef}
      onMouseMove={whileMouseMove}
      onMouseDown={whenMouseDown}
      onMouseOut={onMouseOut}
    >
      <motion.ol
        ref={carouselContainerRef}
        className="h-full flex relative"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {[1, 2, 3, 4, 5].map((el, index) => (
          <SmoothCard />
        ))}
      </motion.ol>
      <div
        ref={customCursorRef}
        className="absolute  -translate-x-1/2 -translate-y-1/2 z-50 bg-customPrimary w-[125px] h-[125px] rounded-full pointer-events-none flex justify-center items-center "
      >
        <p className="uppercase text-customBlack font-bold text-sm">Drag</p>
      </div>
    </div>
  );
};

export default CarouselSmoothCard;
