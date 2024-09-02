import React from "react";
import { MainSection } from "../container/sections/index";
import { motion } from "framer-motion";
import { AwardCard, TvNoiseBg } from "../container/commponents/index";
import { Logo1, Logo2, Logo3 } from "../assets/svg";

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

        <div className="px-[80px]">
          <section data-scroll-section className="py-[230px]">
            <div className="flex h-[400px] items-center justify-between px-[120px] text-xs font-semibold uppercase text-customBlack">
              <AwardCard Logo={Logo1} text={"Earth Guardian Award"} />
              <AwardCard Logo={Logo2} text={"Green Horizon Award"} />
              <AwardCard Logo={Logo3} text={"Nature's Beacon Award"} />
            </div>
          </section>
          <section data-scroll-section>
            <div className="h-[400px] p-5">asd</div>
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
