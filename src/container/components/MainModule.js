import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { CarouselSmoothCard, Nav, SmoothCard } from "./index";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { module_data } from "../../data/main_module_content_data";
import { nav_data } from "../../data/nav_data";

const MainModule = ({ setToggler }) => {
  const [containerAnimation, setContainerAnimation] = useState(false);
  const [showIniatives, setShowIniatives] = useState(false);

  let animationTimeoutId = null;
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
        (animationTimeoutId = setTimeout(
          () => setContainerAnimation(true),
          200,
        ))
      }
      onAnimationEnd={clearTimeout(animationTimeoutId)}
    >
      <section className="absolute left-0 top-0 h-full w-full">
        <motion.div
          initial={{ width: "100%" }}
          animate={containerAnimation && { width: "0" }}
          transition={{ duration: 0.5, ease: customEase }}
          className="absolute left-0 top-0 z-50 h-full bg-customBlack"
        ></motion.div>

        <div className="relative flex h-full w-full flex-col pt-8">
          <div className="w-full flex-[2_1_0%] px-8 md:px-24">
            <div className="flex h-full w-full items-center justify-between text-sm font-semibold uppercase leading-4 text-customPrimary">
              <div className="block text-lg font-bold md:hidden">
                World wild Nautre Care
              </div>
              <div className="hidden flex-[2_1_0%] justify-between md:flex">
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
                <button
                  onClick={() => {
                    setToggler(false);
                    document.body.style.overflow = "auto";
                  }}
                  className="rounded-full border border-white hover:cursor-pointer"
                >
                  <VscClose color="white" className="h-5 w-5 sm:h-8 sm:w-8" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex-[9_1_0%] pb-14 pt-8">
            <div className="hidden h-full md:block">
              <CarouselSmoothCard />
            </div>
            <div className="block text-customPrimary md:hidden">
              {showIniatives && (
                <div>
                  <div className="h-[1px] w-full bg-customPrimary"></div>
                  <div className="h-screen overflow-y-auto pb-16">
                    <div className="px-8 md:px-0">
                      <div className="my-5 flex">
                        <div>
                          <button onClick={() => setShowIniatives(false)}>
                            <IoIosArrowBack fontSize={23} />
                          </button>
                        </div>
                        <div className="ms-14">
                          <div className="my-2 h-2 w-2 rounded-full bg-customPrimary"></div>
                          <div className="text-xs font-semibold uppercase leading-4">
                            <span>
                              World wild Nautre Care <br />
                              Collerction of internal projects under the World
                              wild Nautre Care
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full sm:grid sm:grid-cols-2">
                        {module_data.map((data, index) => (
                          <div key={data.id} className="mb-12 w-full px-2">
                            <SmoothCard
                              imgContent={data.imgContent}
                              urlRedirect={data.urlRedirect}
                              title={data.title}
                              subtext={data.subtext}
                              rightText={data.rightText}
                              text={data.text}
                              urlText={"Visit the Site"}
                              number={index + 1}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!showIniatives && (
                <div className="px-8 md:px-24">
                  <Nav data={nav_data} />
                  <button
                    className="flex items-center text-lg font-semibold uppercase"
                    onClick={() => setShowIniatives(true)}
                  >
                    <span>Iniatives</span>
                    <div>
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-5 px-8 text-customGray md:px-24">
            <span>World wild Nautre Care &reg;, Inc</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MainModule;
