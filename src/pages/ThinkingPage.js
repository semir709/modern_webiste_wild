import React, { useEffect, useState } from "react";
import {
  ArticleCard,
  CustomRadioFilter,
  Footer,
  Navigation,
  ParticlesContainer,
} from "../container/components";
import { thinking_radio_data } from "../data/thinking_radio_data";
import { thinking_data } from "../data/thinking_data";
import { nanoid } from "nanoid";

import { motion } from "framer-motion";

const headerVariants = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};
const ThinkingPage = () => {
  const [filter, setFilter] = useState(thinking_radio_data[0].slug);
  const [data, setData] = useState(thinking_data);
  const darkMode = true;
  const textColorNav = 1;

  useEffect(() => {
    if (filter === thinking_radio_data[0].slug) {
      setData([...thinking_data]);
    } else {
      const newData = thinking_data.filter(({ tag }) => tag === filter);

      setData([...newData]);
    }
  }, [filter]);

  return (
    <>
      <Navigation textColorNav={textColorNav} darkMode={darkMode} />
      <ParticlesContainer darkMode={darkMode} />
      <div data-scroll-section>
        <main className="mb-24 px-[5%] pt-48 text-customPrimary">
          <section>
            <div className="mb-72">
              <div className="w-full overflow-hidden">
                <motion.h1
                  variants={headerVariants}
                  initial="initial"
                  animate="animate"
                  className="flex items-center justify-between text-4xl font-bold uppercase sm:text-8xl"
                >
                  <span className="block">Thinking</span>
                  <span className="block h-[30px] w-[30px] rounded-full bg-customPrimary sm:h-[50px] sm:w-[50px]"></span>
                </motion.h1>
              </div>
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-md mt-20 grid grid-cols-6 gap-5 font-semibold"
              >
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <p className="mb-5 text-2xl uppercase">
                    <strong>Our thoughts</strong>
                  </p>
                  <p>
                    Our Thoughts: These are original articles created by our
                    company, designed to inform, inspire, and engage our readers
                    with valuable insights and updates on topics relevant to our
                    industry.
                  </p>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <p className="mb-5 text-2xl uppercase">
                    <strong>Sponsors thoughts</strong>
                  </p>
                  <p>
                    Sponsored Thoughts: These articles are provided by our
                    sponsors, offering perspectives, products, or services that
                    align with our audience’s interests. They are clearly marked
                    as sponsored content to maintain transparency.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="w-full">
              <div className="mb-4 flex w-full overflow-x-auto pb-4 md:justify-end">
                <div>
                  <CustomRadioFilter
                    radioData={thinking_radio_data}
                    setFilter={setFilter}
                    darkMode={true}
                  />
                </div>
              </div>
              <div>
                {data.map(({ title, date, imgContent, urlRedirect }) => (
                  <div key={nanoid()}>
                    <ArticleCard
                      title={title}
                      date={date}
                      image={imgContent}
                      url={urlRedirect}
                      darkMode={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer lightMode={true} />
      </div>
    </>
  );
};

export default ThinkingPage;
