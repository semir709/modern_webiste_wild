import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variantScroll = {
  up: {
    height: "fit-content",
  },
  down: {
    height: 0,
  },
};

const Navigation = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    var lastScrollTop = 0;

    const checkScrollDirection = () => {
      var st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDown(true);
      } else if (st < lastScrollTop) {
        setScrollDown(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", checkScrollDirection, false);

    return () => window.removeEventListener("scroll", checkScrollDirection);
  }, []);
  return (
    <motion.div
      className="w-full fixed top-0 left z-50 overflow-hidden bg-green-300"
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
    >
      <div className="w-full h-full py-[50px] px-[100px] flex justify-between items-center text-white uppercase font-semibold text-sm">
        <div className="text-2xl font-bold">Beautiful/wild </div>
        <div>Nav</div>
        <div>dots</div>
      </div>
    </motion.div>
  );
};

export default Navigation;
