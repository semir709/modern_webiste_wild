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
          className="absolute w-full h-full top-0 left-0 z-50"
          variants={variantsParanet}
          initial="start"
          animate="end"
        >
          <TvNoiseBg>
            <div className="w-full h-full flex items-center justify-center ">
              <div className="h-[200px] sm:text-[100px] text-4xl leading-none uppercase text-center font-extrabold text-customBlack">
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
          <div className="p-5 bg-red-300">asd</div>
        </section>
      </div>
    </>
  );
};

export default Home;
