import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ellipse } from "../../assets/svg/index";
import { MainModule, Nav, NavSpaceWrapper } from "./index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { nav_data } from "../../data/nav_data";

const variantScroll = {
  up: {
    y: -145,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  down: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeInOut",
    },
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

const navColorSet = {
  deafult: { text: "#f4f4f4", bg: "transparent" },
  active: { text: "#252422", bg: "#ffffff" },
  dark: { text: "#f9cdcd", bg: "#252422" },
};

const Navigation = ({
  textColorNav = 0,
  darkMode = false,
  pageLoaded = true,
}) => {
  const [scrollDown, setScrollDown] = useState(true);
  const [toggler, setToggler] = useState(false);
  const { scroll } = useLocomotiveScroll();
  const location = useLocation();

  useEffect(() => {
    let currentPosition = 0;

    if (location.pathname.startsWith("/about/")) {
      setScrollDown(false);
      return;
    }

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
  }, [scroll, location.pathname]);

  const togglerOpen = () => {
    // if (scroll) scroll.stop();
    setToggler(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <motion.div
      className={`fixed top-0 z-20 w-full overflow-hidden`}
      variants={variantScroll}
      animate={scrollDown ? "down" : "up"}
      style={{
        backgroundColor:
          textColorNav === 0
            ? navColorSet.deafult.bg
            : darkMode
              ? navColorSet.dark.bg
              : navColorSet.active.bg,
        transition: "0.3s",
      }}
    >
      <NavSpaceWrapper>
        <motion.div
          variants={variantNav}
          initial="initial"
          animate={pageLoaded && "animate"}
          className={`flex items-center justify-between text-sm font-semibold uppercase`}
          style={{
            color:
              textColorNav === 0
                ? navColorSet.deafult.text
                : darkMode
                  ? navColorSet.dark.text
                  : navColorSet.active.text,
          }}
        >
          <Link
            to={"/"}
            className="cursor-pointer text-lg font-bold sm:text-2xl"
          >
            Beautiful/wild
          </Link>
          <div className="hidden w-1/2 md:block">
            <Nav
              data={nav_data}
              lineColor={
                textColorNav === 0
                  ? navColorSet.deafult.text
                  : darkMode
                    ? navColorSet.dark.text
                    : navColorSet.active.text
              }
            />
          </div>

          <button className="md:w-[50px]" onClick={togglerOpen}>
            <div className="group hidden items-center justify-center md:flex">
              {Array.from({ length: 3 }).map(() => (
                <div
                  key={nanoid()}
                  className="me-[1px] transition-[margin] group-hover:me-1"
                >
                  <Ellipse
                    fill={
                      textColorNav === 0
                        ? navColorSet.deafult.text
                        : darkMode
                          ? navColorSet.dark.text
                          : navColorSet.active.text
                    }
                  />
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
