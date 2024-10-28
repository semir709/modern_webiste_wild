import { nanoid } from "nanoid";
import {
  ArticleCard,
  CustomRadioFilter,
  Footer,
} from "../container/components";
import { news_data } from "../data/news_data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NewsPage = ({ setTextColorNav }) => {
  useEffect(() => {
    setTextColorNav(1);
  }, [setTextColorNav]);

  return (
    <>
      <div data-scroll-section>
        <main className="px-[5%] pt-40 text-customBlack">
          <section>
            <div className="my-20 flex w-full items-center justify-between">
              <h1 className="text-4xl font-bold uppercase sm:text-8xl">News</h1>
              <div>
                <span>
                  <div className="me-2 h-[30px] w-[30px] rounded-full bg-customBlack sm:h-[60px] sm:w-[60px]"></div>
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-16 flex w-full justify-end">
                <div>
                  <CustomRadioFilter />
                  {/* <ul>
                    <li>
                      <motion.button
                        onClick={() => setIsSelected((prev) => !prev)}
                        className="flex items-center"
                        role="radio"
                        aria-checked="false"
                        initial="initial"
                        whileHover={!isSelected && "whileHover"}
                        animate={isSelected ? "animate" : "initial"}
                      >
                        <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black">
                          <motion.div
                            variants={dotVariant}
                            className="h-1/2 w-1/2 rounded-full bg-black"
                          ></motion.div>
                        </div>
                        <div className="ms-5">some text label</div>
                      </motion.button>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div>
                {news_data.map(({ title, date, imgContent, urlRedirect }) => (
                  <div key={nanoid()}>
                    <ArticleCard
                      title={title}
                      date={date}
                      image={imgContent}
                      url={urlRedirect}
                      // darkMode={darkMode}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
