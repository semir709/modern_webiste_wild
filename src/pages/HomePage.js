import React from "react";
import { MainSection } from "../container/sections/index";
import { motion } from "framer-motion";
import { Navigation, TvNoiseBg } from "../container/commponents/index";

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
      <Navigation />

      <div>
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

        <section>
          <MainSection />
        </section>
        <section>
          <div className="bg-red-300 p-5">asd</div>
        </section>
      </div>
    </>
  );
};

export default Home;
