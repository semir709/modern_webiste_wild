import { useEffect, useRef, useState } from "react";
import { CustomDragMouse, SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";
import { module_data } from "../../data/main_module_content_data";

const CarouselSmoothCard = () => {
  const carouselContainerRef = useRef();
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHoverd] = useState(false);

  useEffect(() => {
    const target = carouselContainerRef.current;

    setWidth(target.scrollWidth - target.offsetWidth);
  }, [carouselContainerRef]);

  const whenMouseHover = () => setIsHoverd(true);
  const whenMouseOut = () => setIsHoverd(false);

  return (
    <CustomDragMouse Isfocused={isHovered}>
      <motion.ol
        ref={carouselContainerRef}
        className="flex h-full px-24"
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
        transition={{ duration: 0.3, ease: "linear" }}
        initial={{ x: "20%" }}
        animate={{ x: 0 }}
      >
        {module_data.map((data, index) => (
          <div key={data.id} className="me-2 min-w-[400px]">
            <SmoothCard
              imgContent={data.imgContent}
              urlRedirect={data.urlRedirect}
              title={data.title}
              subtext={data.subtext}
              rightText={data.rightText}
              text={data.text}
              urlText={"Visit the Site"}
              number={index + 1}
              whenMouseHover={whenMouseHover}
              whenMouseOut={whenMouseOut}
            />
          </div>
        ))}
      </motion.ol>
    </CustomDragMouse>
  );
};

export default CarouselSmoothCard;
