import React from "react";
import { MainSection } from "../container/sections/index";
import { motion } from "framer-motion";
import { AwardCard, RCButton, TvNoiseBg } from "../container/commponents/index";
import { Logo1, Logo2, Logo3, MainLogoShort } from "../assets/svg";

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

        <div className="px-[5%]">
          <section data-scroll-section className="py-[230px]">
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
          <section data-scroll-section className="py-[230px]">
            <div className="h-[2px] w-full bg-customBlack"></div>
            <div className="mt-[80px] flex justify-center">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold">
                  <p>
                    BEAUTIFUL/WILD® labore Lorem nulla officia ullamco qui ea
                    incididunt eu enim minim ad. Adipisicing consequat
                    adipisicing quis exercitation nisi veniam nisi elit qui
                    deserunt enim enim sit.
                  </p>
                </h3>
              </div>
              <div className="flex-1">
                <figure className="w-full ps-[100px] text-[200px] font-extrabold text-customBlack">
                  <MainLogoShort />
                </figure>
              </div>
            </div>
            <div className="mt-[60px]">
              <RCButton text={"See the work"} />
            </div>
          </section>
          <section data-scroll-section>
            <div className="h-[400px] bg-blue-300 p-5">asd</div>
          </section>
          <section data-scroll-section>
            <div className="h-[400px] bg-yellow-300 p-5">asd</div>
          </section>
          <section data-scroll-section>
            <div className="h-[400px] bg-pink-300 p-5">asd</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
