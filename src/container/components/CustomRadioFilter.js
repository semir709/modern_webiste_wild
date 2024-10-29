import { motion } from "framer-motion";
import { useState } from "react";

const dotVariant = {
  initial: { scale: 0, opacity: 0 },
  hovered: { scale: 1.5, opacity: 1, transition: { duration: ".4" } },
  animate: { scale: 2, opacity: 1 },
};

const CustomRadioFilter = ({ radioData, setFilter }) => {
  const [isSelectIndex, setIsSelectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);

  const onMouseEnter = (index) => {
    if (index !== isSelectIndex) setIsHovered(index);
  };
  const onMouseLeave = () => {
    setIsHovered(-1);
  };

  const onMouseClick = (index, slug) => {
    setIsSelectIndex(index);
    setIsHovered(-1);

    setFilter(slug);
  };

  return (
    <ul className="flex items-center">
      {radioData.map(({ id, text, slug }, index) => (
        <li className="ms-16 min-w-fit" key={id}>
          <motion.button
            onClick={() => onMouseClick(index, slug)}
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
            <div className="relative flex h-[20px] w-[20px] items-center justify-center rounded-full border border-black">
              <motion.div
                variants={dotVariant}
                className="h-1/2 w-1/2 rounded-full bg-black"
              ></motion.div>
            </div>
            <div className="ms-5 font-semibold uppercase">{text}</div>
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

export default CustomRadioFilter;
