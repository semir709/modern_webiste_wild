import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { CarouselSmoothCard, SmoothCard } from "../commponents/index";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

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

  return (
    <motion.div
      className="fixed top-0 left-0 bg-customBlack w-full h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationStart={() =>
        (timeId = setTimeout(() => setContainerAnimation(true), 200))
      }
      onAnimationEnd={clearTimeout(timeId)}
    >
      <section className="absolute top-0 left-0 w-full h-full  py-[25px] ps-[40px]">
        <motion.div
          initial={{ width: "100%" }}
          animate={containerAnimation && { width: "0" }}
          transition={{ duration: 0.5, ease: customEase }}
          onAnimationComplete={() => setSlideAnimationEnd(true)}
          className="bg-customBlack  h-[90%] absolute top-0 left-0 z-50"
        ></motion.div>

        <div className="h-full  justify-between ">
          <div className=" w-full flex items-center justify-between text-customPrimary overflow-hidden">
            <div className=" items-center font-semibold uppercase text-sm min-[1270px]:flex hidden">
              <div className="me-[100px] flex items-start leading-4 ">
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
            <div className="min-[1270px]:hidden block">
              <div>
                <span className="sm:text-2xl text-lg uppercase font-bold ">
                  Deep/Ocean
                </span>
              </div>
            </div>
            <div className="p-5">
              <div
                className="border rounded-full border-white hover:cursor-pointer "
                onClick={togglerClose}
              >
                <VscClose color="white" className="sm:w-8 sm:h-8  h-5 w-5" />
              </div>
            </div>
          </div>
          <div className=" w-full flex-1 pt-[30px] pb-5 z-30 h-[80%] min-[1270px]:block hidden">
            <CarouselSmoothCard />
          </div>
          {!showIniatives && (
            <div className="min-[1270px]:hidden block  ">
              <nav>
                <ul className="text-customPrimary uppercase font-semibold my-[70px] sm:text-3xl text-lg">
                  <li className="cursor-pointer mb-4">
                    <span>Explore</span>
                  </li>
                  <li className="cursor-pointer mb-4">
                    <span>About</span>
                  </li>
                  <li className="cursor-pointer mb-4">
                    <span>News</span>
                  </li>
                  <li className="cursor-pointer mb-4">
                    <span>Contact</span>
                  </li>
                  <li
                    onClick={() => setShowIniatives(true)}
                    className="cursor-pointer mb-4"
                  >
                    Initiatives <span>&gt;</span>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {showIniatives && (
            <div className="min-[1270px]:hidden block">
              <div className="bg-customPrimary w-full h-[0.5px] absolute left-0"></div>
              <div className="flex  gap-10 text-customPrimary py-5">
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
                  <div className="uppercase text-xs font-semibold mt-3">
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
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={slideAnimationEnd && { opacity: 1 }}
            className="uppercase text-customGray text-sm font-semibold absolute bottom-[35px] "
          >
            Deep/Ocean
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MainModule;
