import { nanoid } from "nanoid";
import { ArticleCard, Footer } from "../container/components";
import { news_data } from "../data/news_data";
import { useEffect } from "react";

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
                  <ul>
                    <li>
                      <label></label>
                      <button role="radio" aria-checked="false">
                        <div className="relative rounded-full border border-black p-5">
                          <div className="rounded-full bg-black p-1"></div>
                        </div>
                      </button>
                    </li>
                  </ul>
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
