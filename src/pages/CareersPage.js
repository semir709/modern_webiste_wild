import React, { useEffect } from "react";
import { motion, transform } from "framer-motion";
import { Footer } from "../container/components";

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
      <main>
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
            <div className="mt-5">hello</div>
            <div>more text hhahahah</div>
          </div>
        </section>
      </main>
      <Footer lightMode={true} />
    </div>
  );
};

export default CareersPage;
