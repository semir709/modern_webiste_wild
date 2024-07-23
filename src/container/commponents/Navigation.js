import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ellipse } from "../../assets/svg/index";
import { MainModule } from "./index";
import { Link, useNavigate } from "react-router-dom";
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

  const [toggler, setToggler] = useState(false);

  const url = useNavigate();

  useEffect(() => {
    setToggler(false);
  }, [url]);

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

  const togglerOpen = () => {
    setToggler(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <motion.div
      className="w-full fixed top-0 left z-40 overflow-hidden  min-h-[180px] "
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full h-full py-[30px] md:px-[100px] px-[20px] flex justify-between items-center text-white uppercase font-semibold text-sm"
      >
        <Link className="sm:text-2xl text-lg font-bold cursor-pointer">
          Beautiful/wild
        </Link>
        <nav className="w-1/2 min-[1270px]:block hidden">
          <ul className="flex justify-around ">
            <li className="cursor-pointer bottomLineAnimation">Explore</li>
            <li className="cursor-pointer bottomLineAnimation">About</li>
            <li className="cursor-pointer bottomLineAnimation">News</li>
            <li className="cursor-pointer bottomLineAnimation">Contact</li>
          </ul>
        </nav>
        <button className="w-[50px] " onClick={togglerOpen}>
          <div className=" justify-center items-center group min-[1270px]:flex hidden">
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

          <div className="uppercase text-base min-[1270px]:hidden block">
            <span>Menu</span>
          </div>
        </button>
      </motion.div>

      {toggler && <MainModule setToggler={setToggler} />}
    </motion.div>
  );
};

export default Navigation;
