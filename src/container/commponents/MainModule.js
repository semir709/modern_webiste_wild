import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { CarouselSmoothCard, Nav, SmoothCard } from "../commponents/index";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const MainModule = ({ setToggler }) => {
  const togglerClose = () => {
    setToggler(false);
    document.body.style.overflow = "auto";
  };

  const [containerAnimation, setContainerAnimation] = useState(false);
  const [slideAnimationEnd, setSlideAnimationEnd] = useState(false);
  const [showIniatives, setShowIniatives] = useState(false);

  let timeId = null;
  const customEase = [0.72, 0, 0.28, 1];

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) scroll.stop();

    return () => {
      if (scroll) scroll.start();
    };
  }, [scroll]);

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen w-full bg-customBlack"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationStart={() =>
        (timeId = setTimeout(() => setContainerAnimation(true), 200))
      }
      onAnimationEnd={clearTimeout(timeId)}
    >
      <section className="absolute left-0 top-0 h-full w-full">
        <motion.div
          initial={{ width: "100%" }}
          animate={containerAnimation && { width: "0" }}
          transition={{ duration: 0.5, ease: customEase }}
          onAnimationComplete={() => setSlideAnimationEnd(true)}
          className="absolute left-0 top-0 z-50 h-full bg-customBlack"
        ></motion.div>

        <div className="relative flex h-full w-full flex-col px-10">
          <div className="w-full flex-[2_1_0%]">
            <div className="flex h-full w-full items-center justify-between text-sm font-semibold uppercase leading-4 text-customPrimary">
              <div className="block lg:hidden">World wild Nautre Care</div>
              <div className="hidden flex-[2_1_0%] justify-between lg:flex">
                <div className="me-4">
                  <span>
                    <div className="rounded-full bg-customPrimary p-1"></div>
                  </span>
                </div>
                <div className="me-4">
                  <span>
                    Internal works of the year
                    <br /> World wild Nautre Care
                  </span>
                </div>
                <div className="me-4">
                  <span>
                    Collerction of internal projects and initiatives under the
                    <br />
                    World wild Nautre Care
                  </span>
                </div>
              </div>
              <div className="flex flex-[1_1_0%] justify-end">
                <button className="rounded-full border border-white hover:cursor-pointer">
                  <VscClose color="white" className="h-5 w-5 sm:h-8 sm:w-8" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex-[9_1_0%] bg-green-300">Here</div>
          <div className="absolute bottom-5 text-customGray">
            <span>World wild Nautre Care &reg;, Inc</span>
          </div>
        </div>

        {/* <div className="h-full justify-between overflow-y-auto"> */}
        {/* <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between overflow-hidden border-b-2 border-customPrimary bg-customBlack px-[40px] py-[20px] text-customPrimary">
            <div className="hidden items-center text-sm font-semibold uppercase min-[1270px]:flex">
              <div className="me-[100px] flex items-start leading-4">
                <div>
                  <span>
                    World wild <br /> Nautre Care
                  </span>
                </div>
              </div>
              <div className="leading-4">
                <span>
                  Collaboration of wold wild comapnies for protecting <br />
                  animal and nature
                </span>
              </div>
            </div>
            <div className="block min-[1270px]:hidden">
              <div>
                <span className="text-lg font-bold uppercase sm:text-2xl">
                  Deep/Ocean
                </span>
              </div>
            </div>
            <div className="p-5">
              <div
                className="rounded-full border border-white hover:cursor-pointer"
                onClick={togglerClose}
              >
                <VscClose color="white" className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
            </div>
          </div> */}
        {/* <div className="z-30 mt-[70px] hidden h-[80%] w-full flex-1 pb-5 pt-[30px] min-[1270px]:block">
            <CarouselSmoothCard />
          </div> */}
        {/* {!showIniatives && (
            <div className="block bg-red-300 min-[1270px]:hidden">
              <Nav /> */}
        {/* <nav>
                <ul className="my-[70px] text-lg font-semibold uppercase text-customPrimary sm:text-3xl">
                  <li className="mb-4 cursor-pointer">
                    <span>Explore</span>
                  </li>
                  <li className="mb-4 cursor-pointer">
                    <span>About</span>
                  </li>
                  <li className="mb-4 cursor-pointer">
                    <span>News</span>
                  </li>
                  <li className="mb-4 cursor-pointer">
                    <span>Contact</span>
                  </li>
                  <li
                    onClick={() => setShowIniatives(true)}
                    className="mb-4 cursor-pointer"
                  >
                    Initiatives <span>&gt;</span>
                  </li>
                </ul>
              </nav> */}
        {/* </div>
          )} */}

        {/* {showIniatives && (
            <div className="block min-[1270px]:hidden">
              <div className="absolute left-0 h-[0.5px] w-full bg-customPrimary"></div>
              <div className="flex gap-10 py-5 text-customPrimary">
                <div>
                  <span>
                    <button onClick={() => setShowIniatives(false)}>
                      <IoIosArrowBack size={20} />
                    </button>
                  </span>
                </div>
                <div className="mt-1">
                  <div>
                    <GoDotFill />
                  </div>
                  <div className="mt-3 text-xs font-semibold uppercase">
                    <span>Aenean vehicula</span>
                    <br />
                    <span>Quisque quis</span>
                    <br />
                    <span>
                      Quisque quis turpis tincidunt eros rhoncus accumsan.Aenean
                      vehicula bibendum sapien.
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="">
                <CarouselSmoothCard />
              </div>
            </div>
          )} */}
        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={slideAnimationEnd && { opacity: 1 }}
            className="absolute bottom-[35px] text-sm font-semibold uppercase text-customGray"
          >
            Deep/Ocean
          </motion.div> */}
        {/* </div> */}
      </section>
    </motion.div>
  );
};

export default MainModule;
