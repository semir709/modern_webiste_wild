import { motion } from "framer-motion";
import { useState } from "react";

const RCButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <p
      className="relative w-fit overflow-hidden rounded-3xl border border-customBlack px-8 py-1 hover:cursor-pointer"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <motion.a
        className={`text-xs font-semibold uppercase`}
        href="/"
        animate={
          isHovered
            ? { color: "white", transition: { duration: "5ms" } }
            : { color: "#252422" }
        }
      >
        {text}
      </motion.a>
      <motion.div
        animate={isHovered ? { top: 0 } : { top: "100%" }}
        className="absolute left-0 -z-10 h-full w-full bg-customBlack"
      ></motion.div>
    </p>
  );
};

export default RCButton;
