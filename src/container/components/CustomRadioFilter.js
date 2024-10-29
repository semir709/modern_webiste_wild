import { motion } from "framer-motion";
import { useState } from "react";

const dotVariant = {
  initial: { scale: 0, opacity: 0 },
  hovered: { scale: 1.5, opacity: 1, transition: { duration: ".4" } },
  animate: { scale: 2, opacity: 1 },
};

const CustomRadioFilter = () => {
  const [isSelectIndex, setIsSelectIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(-1);

  const onMouseEnter = (index) => {
    if (index !== isSelectIndex) setIsHovered(index);
  };
  const onMouseLeave = () => {
    setIsHovered(-1);
  };

  const onMouseClick = (index) => {
    setIsSelectIndex(index);
    setIsHovered(-1);
  };

  const data = [1, 2, 3, 4, 5];
  return (
    <ul className="flex items-center">
      {data.map((el, index) => (
        <li className="mx-2">
          <motion.button
            onClick={() => onMouseClick(index)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
            className="flex items-center"
            role="radio"
            initial="initial"
            animate={
              isHovered === index && isSelectIndex !== index
                ? "hovered"
                : isHovered !== index && isSelectIndex === index
                  ? "animate"
                  : "initial"
            }
          >
            <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black">
              <motion.div
                variants={dotVariant}
                className="h-1/2 w-1/2 rounded-full bg-black"
              ></motion.div>
            </div>
            <div className="ms-5">some text label</div>
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

export default CustomRadioFilter;
