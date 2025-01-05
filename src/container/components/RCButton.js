import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const RCButton = ({ text, darkMode = false, url = "/" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`relative w-fit overflow-hidden rounded-3xl border px-8 py-1 hover:cursor-pointer ${!darkMode ? "border-customBlack" : "border-customPrimary"}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Link to={url}>
        <motion.div
          className={`relative z-10 text-xs font-semibold uppercase`}
          animate={
            isHovered
              ? {
                  color: !darkMode ? "white" : "black",
                  transition: { duration: "5ms" },
                }
              : { color: !darkMode ? "#252422" : "#f9cdcd" }
          }
        >
          {text}
        </motion.div>
      </Link>
      <motion.div
        animate={isHovered ? { top: 0 } : { top: "100%" }}
        className={`absolute left-0 z-0 h-full w-full ${!darkMode ? "bg-customBlack" : "bg-customPrimary"}`}
      ></motion.div>
    </button>
  );
};

export default RCButton;
