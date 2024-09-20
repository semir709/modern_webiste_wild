import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Ellipse } from "../../assets/svg/index";
import { MainModule, Nav, NavSpaceWrapper } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const variantScroll = {
  up: {
    y: -70,
  },
  down: {
    y: 0,
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

// function debounce(func, delay) {
//   let timeoutId;

//   return function (...args) {
//     if (timeoutId) clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

const Navigation = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [toggler, setToggler] = useState(false);
  const url = useNavigate();
  const { scroll } = useLocomotiveScroll();

  // nav animation on scroll
  useEffect(() => {
    let currentPosition = 0;

    const handleScroll = (obj) => {
      const newPosition = obj.scroll.y;

      if (newPosition > currentPosition) {
        setScrollDown(false);
      } else {
        setScrollDown(true);
      }

      currentPosition = newPosition <= 0 ? 0 : newPosition;
    };

    if (scroll) {
      scroll.on("scroll", handleScroll);
    }

    return () => {
      if (scroll) {
        scroll.off("scroll", handleScroll);
      }
    };
  }, [scroll]);

  useEffect(() => {
    setToggler(false);
  }, [url]);

  const togglerOpen = () => {
    setToggler(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <motion.div
      className={"fixed top-0 z-50 w-full overflow-hidden"}
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
          <div className="hidden w-1/2 md:block">
            <Nav />
          </div>
          {/* <nav className="hidden w-1/2 md:block">
            <ul className="flex justify-around">
              <li className="bottomLineAnimation">Explore</li>
              <li className="bottomLineAnimation">About</li>
              <li className="bottomLineAnimation">News</li>
              <li className="bottomLineAnimation">Contact</li>
            </ul>
          </nav> */}
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

            <div className="block p-5 text-base uppercase md:hidden">
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
