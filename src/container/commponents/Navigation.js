import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ellipse } from "../../assets/svg/index";
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
      className="w-full fixed top-0 left z-50 overflow-hidden  min-h-[180px] "
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full h-full py-[50px] px-[100px] flex justify-between items-center text-white uppercase font-semibold text-sm"
      >
        <a className="text-2xl font-bold cursor-pointer">Beautiful/wild </a>
        <nav className="w-1/2">
          <ul className="flex justify-around ">
            <li className="cursor-pointer bottomLineAnimation">Explore</li>
            <li className="cursor-pointer bottomLineAnimation">About</li>
            <li className="cursor-pointer bottomLineAnimation">News</li>
            <li className="cursor-pointer bottomLineAnimation">Contact</li>
          </ul>
        </nav>
        <button className="w-[50px]">
          <div className="flex justify-center items-center group">
            <div className="me-[1px] group-hover:me-1 transition-[margin]">
              <Ellipse />
            </div>
            <div className="me-[1px] group-hover:me-1 transition-[margin]">
              <Ellipse />
            </div>
            <div className="me-[1px] group-hover:me-1 transition-[margin]">
              <Ellipse />
            </div>
          </div>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
