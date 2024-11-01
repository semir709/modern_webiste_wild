import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Footer, RCButton } from "../container/components";
import shark from "../assets/img/shark.jpg";
const imageContainerVariant = {
  initial: { translateY: "100%" },
  animate: {
    translateY: "0",
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const imageChildVariant = {
  initial: { translateY: "-100%", scale: 1.25 },
  animate: {
    translateY: "0",
    scale: 1,
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const parentTextVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childrenTextVariant = {
  initial: { translateY: "100%" },
  animate: {
    translateY: 0,
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const CustomTextOverflow = ({ text }) => {
  return (
    <div className="overflow-hidden">
      <motion.span className="block" variants={childrenTextVariant}>
        {text}
      </motion.span>
    </div>
  );
};

const CareersPage = ({ setDarkMode }) => {
  useEffect(() => {
    setDarkMode(true);
  }, [setDarkMode]);
  return (
    <div data-scroll-section>
      <main className="mb-60">
        <section className="flex flex-col px-[5%] pt-40 text-customPrimary sm:flex-row">
          <div className="mb-12 flex-1 sm:mb-0">
            <h1 className="mb-28 mt-16 text-6xl font-bold uppercase md:mt-32 md:text-8xl">
              <motion.span
                variants={parentTextVariant}
                initial="initial"
                animate="animate"
              >
                <CustomTextOverflow text={"Make"} />
                <CustomTextOverflow text={"B/W Great."} />
                <CustomTextOverflow
                  text={
                    <div className="flex items-center">
                      <span className="me-5 block h-fit text-9xl sm:me-32">
                        <div className="h-[40px] w-[40px] rounded-full bg-customPrimary md:h-[60px] md:w-[60px]"></div>
                      </span>
                      <span className="block">Get</span>
                    </div>
                  }
                />
                <CustomTextOverflow text={"Paid."} />
              </motion.span>
            </h1>
            <div className="mt-5 w-40">
              <span className="block text-xs uppercase">
                Make great work. <br /> Work with great people. <br />
                BASIC/DEPT®, Inc 10 - 24©
              </span>
            </div>
          </div>
          <div className="flex-1">
            <motion.div
              variants={imageContainerVariant}
              initial="initial"
              animate="animate"
              className="w-full overflow-hidden"
            >
              <motion.div
                variants={imageChildVariant}
                initial="initial"
                animate="animate"
                className="w-full"
              >
                <img
                  className="h-auto w-full object-cover"
                  src={shark}
                  alt="hiking"
                />
              </motion.div>
            </motion.div>
            <div className="mt-5 text-sm font-semibold uppercase">
              <span>
                Openings <b>(0)</b>
              </span>
              <span className="ms-12 sm:ms-36">
                Offices <b>(08)</b>
              </span>
            </div>
            <div className="mt-36">
              <div className="flex gap-10 text-3xl font-semibold">
                <p>
                  As part of Dept, we operate offices across the world. We’re
                  always looking to connect with individuals who want to make
                  the best work of their lives with the world’s greatest brands.
                  If you’re interested in working with us or learning more, drop
                  us a note, portfolio link, or résumé. We’ll take anything
                  you’ve got.
                </p>
                <span className="hidden sm:block">●</span>
              </div>
              <div className="mt-10">
                <RCButton text={"Apply here"} darkMode={true} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lightMode={true} />
    </div>
  );
};

export default CareersPage;
