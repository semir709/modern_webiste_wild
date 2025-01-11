import { nanoid } from "nanoid";
import {
  ArticleCard,
  CustomRadioFilter,
  Footer,
  Navigation,
  ParticlesContainer,
} from "../container/components";
import { news_data } from "../data/news_data";
import { useEffect, useState } from "react";
import { radioData } from "../data/radioData";
import { motion } from "framer-motion";

const textVariants = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const newsVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const NewsPage = () => {
  const [filter, setFilter] = useState(radioData[0].slug);
  const [data, setData] = useState(news_data);
  const textColorNav = 1;
  const darkMode = false;

  useEffect(() => {
    if (filter === radioData[0].slug) {
      setData([...news_data]);
    } else {
      const newData = news_data.filter(({ tag }) => tag === filter);

      setData([...newData]);
    }
  }, [filter]);

  return (
    <>
      <Navigation textColorNav={textColorNav} darkMode={darkMode} />
      <ParticlesContainer darkMode={darkMode} />
      <div data-scroll-section>
        <main className="px-[5%] pt-40 text-customBlack">
          <section>
            <div className="my-20 w-full overflow-hidden">
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="flex w-full items-center justify-between"
              >
                <h1 className="text-4xl font-bold uppercase sm:text-8xl">
                  News
                </h1>
                <div>
                  <span>
                    <div className="me-2 h-[30px] w-[30px] rounded-full bg-customBlack sm:h-[60px] sm:w-[60px]"></div>
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={newsVariants}
              initial="initial"
              animate="animate"
              className="w-full"
            >
              <div className="mb-4 flex w-full overflow-x-auto pb-4 md:justify-end">
                <div>
                  <CustomRadioFilter
                    radioData={radioData}
                    setFilter={setFilter}
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
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
