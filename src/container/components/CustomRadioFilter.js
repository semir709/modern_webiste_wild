import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const dotVariant = {
  initial: { scale: 0, opacity: 0 },
  hovered: { scale: 1.5, opacity: 1, transition: { duration: ".4" } },
  animate: { scale: 2, opacity: 1 },
};

const CustomRadioFilter = () => {
  const [isSelected, setIsSelected] = useState(false);
  //   const [isHovered, setIsHovered] = useState(false);

  //   useEffect(() => {
  //     console.log(isHovered);
  //   }, [isHovered]);

  const data = [1, 2, 3, 4, 5];
  return (
    <ul className="flex items-center">
      {data.map((el, index) => (
        <li className="mx-2">
          <motion.button
            onClick={() => setIsSelected(index)}
            className="flex items-center"
            role="radio"
            // aria-checked="false"
            // animate={isSelected === index ? "animate" : "initial"}
            animate={isSelected === index ? "animate" : "initial"}
            whileHover={isSelected === index ? "" : "hovered"}
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
