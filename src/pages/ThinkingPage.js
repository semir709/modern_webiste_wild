import React, { useEffect, useState } from "react";
import {
  ArticleCard,
  CustomRadioFilter,
  Footer,
} from "../container/components";
import { thinking_radio_data } from "../data/thinking_radio_data";
import { thinking_data } from "../data/thinking_data";
import { nanoid } from "nanoid";

const ThinkingPage = ({ setDarkMode }) => {
  const [filter, setFilter] = useState(thinking_radio_data[0].slug);
  const [data, setData] = useState(thinking_data);

  useEffect(() => {
    if (filter === thinking_radio_data[0].slug) {
      setData([...thinking_data]);
    } else {
      const newData = thinking_data.filter(({ tag }) => tag === filter);

      setData([...newData]);
    }
  }, [filter]);

  useEffect(() => {
    setDarkMode(true);
  }, [setDarkMode]);

  return (
    <div data-scroll-section>
      <main className="px-[5%] pt-40 text-customPrimary">
        <section>
          <div>hello firs text</div>
          <div
            // variants={newsVariants}
            // initial="initial"
            // animate="animate"
            className="w-full"
          >
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
  );
};

export default ThinkingPage;
