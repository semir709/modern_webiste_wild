import React, { useEffect } from "react";
import { motion, transform } from "framer-motion";
import { Footer, RCButton } from "../container/components";

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

const CareersPage = ({ setDarkMode }) => {
  useEffect(() => {
    setDarkMode(true);
  }, [setDarkMode]);
  return (
    <div data-scroll-section>
      <main className="mb-60">
        <section className="flex px-[5%] pt-40 text-customPrimary">
          <div className="flex-1">
            <div className="w-3/4">
              <h1 className="text-8xl font-bold uppercase">
                text
                {/* <span>
              <span>Make</span> <br /> <span>BW exceeding.</span> <br />
              <span className="flex justify-between">
                <span>●</span>
                <span>Get</span>
              </span>
              Paid.
            </span> */}
              </h1>
              <div className="mt-5">
                <span className="text-xs uppercase">
                  ake great work.
                  <br /> Work with great people. <br /> Beautiful/wild®, Inc 10
                  - 24©
                </span>
              </div>
            </div>
          </div>
          <div className="group flex-1">
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
                  className="h-auto w-full"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/a9848ed1a719d650ff4786ffdfd1345ede200f38-1736x2430.jpg?w=1280&fm=webp&q=65"
                  alt="img"
                />
              </motion.div>
            </motion.div>
            <div className="mt-5 text-sm font-semibold uppercase">
              <span>
                Openings <b>(0)</b>
              </span>
              <span className="ms-36">
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
                <span>●</span>
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
