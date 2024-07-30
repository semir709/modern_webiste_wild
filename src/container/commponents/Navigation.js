import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { Ellipse } from "../../assets/svg/index";
import { MainModule, NavSpaceWrapper } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const variantScroll = {
  up: {
    height: "fit-content",
  },
  down: {
    height: 0,
  },
};
const variantNav = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
};

const Navigation = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [toggler, setToggler] = useState(false);
  const url = useNavigate();

  // nav animation on scroll
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

  // When open module or change page
  useEffect(() => {
    setToggler(false);
  }, [url]);

  const togglerOpen = () => {
    setToggler(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <motion.div
      className="fixed top-0 z-40 w-full overflow-hidden"
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
    >
      <NavSpaceWrapper>
        <motion.div
          variants={variantNav}
          initial="initial"
          animate="animate"
          className="flex items-center justify-between text-sm font-semibold uppercase text-white"
        >
          <Link className="cursor-pointer text-lg font-bold sm:text-2xl">
            Beautiful/wild
          </Link>
          <nav className="hidden w-1/2 md:block">
            <ul className="flex justify-around">
              <li className="bottomLineAnimation">Explore</li>
              <li className="bottomLineAnimation">About</li>
              <li className="bottomLineAnimation">News</li>
              <li className="bottomLineAnimation">Contact</li>
            </ul>
          </nav>
          <button className="w-[50px]" onClick={togglerOpen}>
            <div className="group hidden items-center justify-center md:flex">
              {Array.from({ length: 3 }).map(() => (
                <div
                  key={nanoid()}
                  className="me-[1px] transition-[margin] group-hover:me-1"
                >
                  <Ellipse />
                </div>
              ))}
            </div>

            <div className="md-4 block p-5 text-base uppercase md:hidden">
              <span>Menu</span>
            </div>
          </button>
        </motion.div>
      </NavSpaceWrapper>

      {toggler && <MainModule setToggler={setToggler} />}
    </motion.div>
  );
};

export default Navigation;
