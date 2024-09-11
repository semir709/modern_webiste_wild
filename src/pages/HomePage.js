import React from "react";
import { MainSection } from "../container/sections/index";
import { motion } from "framer-motion";
import {
  AwardCard,
  HorizontalScroll,
  RCButton,
  TvNoiseBg,
} from "../container/commponents/index";
import { Logo1, Logo2, Logo3, MainLogoShort } from "../assets/svg";
import { Link } from "react-router-dom";
import wild_dest from "../data/wild_dest.json";

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

const Home = () => {
  return (
    <>
      <main>
        <section data-scroll-section>
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

        <section data-scroll-section className="px-[5%] py-[230px]">
          <div className="flex items-center justify-between text-xs font-semibold uppercase text-customBlack md:px-[10%]">
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
        <section data-scroll-section className="px-[5%] py-[230px]">
          <div className="h-[2px] w-full bg-customBlack"></div>
          <div className="mt-[80px] flex flex-col justify-center md:flex-row">
            <div className="order-2 flex-1 md:order-1">
              <h3 className="text-lg font-semibold sm:text-3xl">
                <p>
                  BEAUTIFUL/WILD® labore Lorem nulla officia ullamco qui ea
                  incididunt eu enim minim ad. Adipisicing consequat adipisicing
                  quis exercitation nisi veniam nisi elit qui deserunt enim enim
                  sit.
                </p>
              </h3>
            </div>
            <div className="order-1 flex-1 md:order-2">
              <figure className="mb-10 w-full text-[200px] font-extrabold text-customBlack md:mb-0 md:ps-[100px]">
                <MainLogoShort />
              </figure>
            </div>
          </div>
          <div className="mt-[60px]">
            <RCButton text={"See the work"} />
          </div>
        </section>
        <section data-scroll-section className="py-[230px] md:px-[5%]">
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
                    <div className="mt-5 uppercase text-customBlack">
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
        <section data-scroll-section className="px-[5%] py-[230px]">
          <div className="w-full">
            <div className="h-[1px] w-full bg-customBlack"></div>
            <div className="mt-4 items-center justify-between text-sm md:flex">
              <div className="leading-3 md:w-[40%]">00</div>
              <div className="flex items-center justify-between md:w-[60%]">
                <span className="leading-3 md:text-base">/05</span>
                <span className="leading-3 md:text-2xl">●</span>
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section>
          <div className="h-[400px] bg-pink-300 p-5">asd</div>
        </section>
      </main>
    </>
  );
};

export default Home;
