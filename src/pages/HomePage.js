import { MainSection } from "../container/sections/index";
import { motion } from "framer-motion";
import {
  ArticleCard,
  AwardCard,
  CustomDragMouse,
  Footer,
  HorizontalScroll,
  RCButton,
  TvNoiseBg,
} from "../container/components/index";
import { Logo1, Logo2, Logo3, MainLogoShort } from "../assets/svg";
import { Link } from "react-router-dom";
import wild_dest from "../data/wild_dest.json";
import { eng_data } from "../data/engagements_data";
import { module_data } from "../data/main_module_content_data";
import { news_data } from "../data/news_data";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";

const variantsParanet = {
  start: { height: "100vh" },
  end: {
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const variantsChildren = {
  start: { height: "100%" },
  end: {
    height: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

const colorPalet = {
  light: { text: "#252422", bg: "#ffffff" },
  dark: { text: "#f9cdcd", bg: "#252422" },
};

const Home = ({ setTextColorNav, setDarkMode, darkMode = false }) => {
  const heroRef = useRef();
  const stickyRef = useRef();

  useEffect(() => {
    const heroSection = heroRef.current;
    const stickySection = stickyRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroSection) {
              setTextColorNav(0);
            }

            if (entry.target === stickySection) {
              setDarkMode(1);
              console.log("It get's dark");
            }
          } else {
            if (entry.target === heroSection) {
              setTextColorNav(1);
            }

            if (entry.target === stickySection) {
              console.log("It light!!!");
              setDarkMode(0);
            }
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (heroSection) observer.observe(heroSection);
    if (stickySection) observer.observe(stickySection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (stickySection) observer.unobserve(stickySection);
    };
  }, [setTextColorNav]);

  return (
    <>
      <div
        style={{
          background: darkMode === 0 ? colorPalet.light.bg : colorPalet.dark.bg,
          transition: " 0.3s",
        }}
        data-scroll-section
      >
        <section ref={heroRef}>
          <motion.div
            className="absolute left-0 top-0 z-50 h-full w-full"
            variants={variantsParanet}
            initial="start"
            animate="end"
          >
            <TvNoiseBg>
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-[200px] text-center text-4xl font-extrabold uppercase leading-none text-customBlack sm:text-[100px]">
                  <motion.div
                    className="overflow-hidden"
                    variants={variantsChildren}
                  >
                    Beautiful <br /> wild
                  </motion.div>
                </div>
              </div>
            </TvNoiseBg>
          </motion.div>
          <div>
            <MainSection />
          </div>
        </section>

        <section className="px-[5%] py-[180px]">
          <div
            style={{
              color:
                darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
              fill:
                darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
            }}
            className="flex items-center justify-between text-xs font-semibold uppercase md:px-[10%]"
          >
            <div className="mx-5">
              <AwardCard Logo={Logo1} text={"Earth Guardian Award"} />
            </div>
            <div className="mx-5">
              <AwardCard Logo={Logo2} text={"Green Horizon Award"} />
            </div>
            <div className="mx-5">
              <AwardCard Logo={Logo3} text={"Nature's Beacon Award"} />
            </div>
          </div>
        </section>

        <section className="px-[5%] py-[100px]">
          <div
            style={{
              background:
                darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
            }}
            className="h-[2px] w-full"
          ></div>
          <div className="mt-[80px] flex flex-col justify-center md:flex-row">
            <div className="order-2 flex-1 md:order-1">
              <h3 className="text-lg font-semibold sm:text-3xl">
                <p
                  style={{
                    color:
                      darkMode === 0
                        ? colorPalet.light.text
                        : colorPalet.dark.text,
                  }}
                >
                  BEAUTIFUL/WILD® labore Lorem nulla officia ullamco qui ea
                  incididunt eu enim minim ad. Adipisicing consequat adipisicing
                  quis exercitation nisi veniam nisi elit qui deserunt enim enim
                  sit.
                </p>
              </h3>
            </div>
            <div className="order-1 flex-1 md:order-2">
              <figure
                style={{
                  fill:
                    darkMode === 0
                      ? colorPalet.light.text
                      : colorPalet.dark.text,
                }}
                className="mb-10 w-full text-[200px] font-extrabold md:mb-0 md:ps-[100px]"
              >
                <MainLogoShort />
              </figure>
            </div>
          </div>
          <div className="mt-[60px]">
            <RCButton text={"See the work"} darkMode={darkMode === 1} />
          </div>
        </section>
        <section className="py-[100px] md:px-[5%]">
          <div className="w-full overflow-auto p-5">
            <ul className="flex w-full gap-5">
              {wild_dest.map(({ type, src, alt }) => (
                <li className="group min-w-[45%] md:min-w-0 md:flex-1">
                  <Link>
                    <div className="h-auto overflow-hidden">
                      <div className="h-full scale-105 transition-transform duration-300 group-hover:scale-100">
                        {type === "img" && (
                          <picture className="h-full">
                            <img
                              src={src}
                              alt={alt}
                              className="h-full w-full object-cover"
                            />
                          </picture>
                        )}
                        {type === "video" && (
                          <video autoPlay loop src={src}>
                            video
                          </video>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        color:
                          darkMode === 0
                            ? colorPalet.light.text
                            : colorPalet.dark.text,
                      }}
                      className="mt-5 uppercase"
                    >
                      <h5 className="text-lg font-bold underline-offset-4 group-hover:underline sm:text-2xl">
                        Patogania
                      </h5>
                      <p className="mt-4 w-2/3 text-xs font-medium leading-5 sm:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Curabitur eget aliquet mi, sed malesuada eros.
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="ps-1"></li>
            </ul>
          </div>
        </section>
        <section className="pt-[100px]">
          <div className="w-full">
            <div
              className="px-[5%]"
              style={{
                color:
                  darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
              }}
            >
              <div
                style={{
                  background:
                    darkMode === 0
                      ? colorPalet.light.text
                      : colorPalet.dark.text,
                }}
                className="h-[1px] w-full"
              ></div>
              <div className="mt-4 items-center justify-between text-sm md:flex">
                <div className="leading-3 md:w-[40%]">00</div>
                <div className="flex items-center justify-between md:w-[60%]">
                  <span className="leading-3 md:text-base">/05</span>
                  <span className="leading-3 md:text-2xl">●</span>
                </div>
              </div>
              <h2 className="my-20 text-3xl font-bold uppercase sm:text-5xl">
                Featured <br></br> Engagements
              </h2>
            </div>

            <CustomDragMouse>
              <HorizontalScroll data={eng_data} darkMode={darkMode} />
            </CustomDragMouse>
          </div>
        </section>

        <section id="stick" className="h-fit w-full px-[5%] py-[100px]">
          <div className="flex flex-col lg:flex-row">
            <div
              ref={stickyRef}
              data-scroll
              data-scroll-speed="5"
              data-scroll-sticky // Attibute that enables the sticky scroll
              data-scroll-target="#stick"
              className="order-2 h-fit flex-1 text-center lg:order-1 lg:text-left"
              style={{
                color:
                  darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
                // transition: "0.3s",
              }}
            >
              <span className="block text-[6.25vw] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
                BASIC/DEPT® helps brands ● connect w/ culture
              </span>
              <span className="mt-10 block text-lg uppercase">
                Adweek <strong>Agency Spotlight</strong>
              </span>
              <p className="mt-8 lg:mt-32">
                <RCButton text={"About Us"} darkMode={darkMode} />
              </p>
            </div>
            <div className="order-1 flex-1 lg:order-2">
              {module_data.map(({ imgContent }) => (
                <div className="relative mb-5 h-[400px] w-full">
                  <div className="absolute left-0 top-0 h-full w-full bg-black opacity-10"></div>
                  <img
                    className="h-full w-full object-cover"
                    src={imgContent.url}
                    alt={imgContent.alt}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-[5%] py-[100px]">
          <div className="mb-10 flex items-center justify-between">
            <h2
              style={{
                color:
                  darkMode === 0 ? colorPalet.light.text : colorPalet.dark.text,
              }}
              className="max-w-sm text-lg font-semibold uppercase sm:text-5xl"
            >
              Featured News
            </h2>
            <div>
              <RCButton text={"View All"} darkMode={darkMode} />
            </div>
          </div>
          {news_data.map(({ title, date, imgContent, urlRedirect }) => (
            <div key={nanoid()}>
              <ArticleCard
                title={title}
                date={date}
                image={imgContent}
                url={urlRedirect}
                darkMode={darkMode}
              />
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
