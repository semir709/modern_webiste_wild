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
      className="left fixed top-0 z-40 min-h-[180px] w-full overflow-hidden"
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flexBetween navMargPadg text-sm font-semibold uppercase text-white"
      >
        <Link className="cursor-pointer text-lg font-bold sm:text-2xl">
          Beautiful/wild
        </Link>
        <nav className="hidden w-1/2 min-[1270px]:block">
          <ul className="flexAround">
            <li className="bottomLineAnimation">Explore</li>
            <li className="bottomLineAnimation">About</li>
            <li className="bottomLineAnimation">News</li>
            <li className="bottomLineAnimation">Contact</li>
          </ul>
        </nav>
        <button className="w-[50px]" onClick={togglerOpen}>
          <div className="group hidden items-center justify-center min-[1270px]:flex">
            <div className="me-[1px] transition-[margin] group-hover:me-1">
              <Ellipse />
            </div>
            <div className="me-[1px] transition-[margin] group-hover:me-1">
              <Ellipse />
            </div>
            <div className="me-[1px] transition-[margin] group-hover:me-1">
              <Ellipse />
            </div>
          </div>

          <div className="m-4 block p-5 text-base uppercase min-[1270px]:hidden">
            <span>Menu</span>
          </div>
        </button>
      </motion.div>

      {toggler && <MainModule setToggler={setToggler} />}
    </motion.div>
  );
};

export default Navigation;
