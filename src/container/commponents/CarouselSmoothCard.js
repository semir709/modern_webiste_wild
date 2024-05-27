import { useEffect, useRef, useState } from "react";
import { SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";

const CarouselSmoothCard = () => {
  const carouselContainerRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const target = carouselContainerRef.current;

    setWidth(target.scrollWidth - target.offsetWidth);
  }, []);
  return (
    <motion.ol
      ref={carouselContainerRef}
      className="h-full flex"
      drag="x"
      dragConstraints={{ right: 0, left: -width }}
      transition={{ duration: 5 }}
    >
      {[1, 2, 3, 4, 5].map(() => (
        <SmoothCard />
      ))}
    </motion.ol>
  );
};

export default CarouselSmoothCard;
