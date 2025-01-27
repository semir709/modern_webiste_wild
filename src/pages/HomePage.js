import { MainSection } from "../container/sections/index";
import {
  ArticleCard,
  AwardCard,
  CustomLineInfo,
  CustomZoomCard,
  FirstLoadIntroComponent,
  Footer,
  Navigation,
  ParticlesContainer,
  RCButton,
  SponsorComponent,
} from "../container/components/index";
import { MainLogoShort } from "../assets/svg";
import { wild_dest } from "../data/wild_dest.js";
import { module_data } from "../data/main_module_content_data";
import { news_data } from "../data/news_data";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { awards_data } from "../data/awards_data.js";

const colorPalet = {
  light: { text: "#252422", bg: "#ffffff" },
  dark: { text: "#f9cdcd", bg: "#252422" },
};

const Home = () => {
  const heroRef = useRef();
  const [textColorNav, setTextColorNav] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const imagesStickyRef = useRef();

  useEffect(() => {
    const heroSection = heroRef.current;
    const imagesTarget = imagesStickyRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroSection) {
              setTextColorNav(0);
            }

            if (entry.target === imagesTarget) {
              setDarkMode(1);
            }
          } else {
            if (entry.target === heroSection) {
              setTextColorNav(1);
            }

            if (entry.target === imagesTarget) {
              setDarkMode(0);
            }
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (heroSection) observer.observe(heroSection);
    if (imagesTarget) observer.observe(imagesTarget);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (imagesTarget) observer.unobserve(imagesTarget);
    };
  }, [setTextColorNav, setDarkMode]);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Navigation
        textColorNav={textColorNav}
        darkMode={darkMode}
        pageLoaded={isLoaded}
      />
      <ParticlesContainer darkMode={darkMode} />
      <div data-scroll-section>
        <section ref={heroRef}>
          <div>
            <MainSection setIsLoaded={setIsLoaded} />
          </div>
        </section>

        <section className="px-[5%] py-[180px]">
          <div
            style={{
              color: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
              fill: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
            }}
            className="flex items-center justify-between text-xs font-semibold uppercase md:px-[10%]"
          >
            {awards_data.map(({ id, text, logo, url }) => (
              <div className="mx-5" key={id}>
                <AwardCard Logo={logo} text={text} url={url} />
              </div>
            ))}
          </div>
        </section>

        <section className="px-[5%] py-[100px]">
          <div
            style={{
              background: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-[2px] w-full"
          ></div>
          <div className="mt-[80px] flex flex-col justify-center md:flex-row">
            <div className="order-2 flex-1 md:order-1">
              <h3 className="text-lg font-semibold sm:text-3xl">
                <p
                  style={{
                    color: !darkMode
                      ? colorPalet.light.text
                      : colorPalet.dark.text,
                  }}
                >
                  BEAUTIFUL/WILD® labore Lorem nulla officia ullamco qui ea
                  incididunt eu enim minim ad. Adipisicing consequat adipisicing
                  quis exercitation nisi veniam nisi elit qui deserunt enim enim
                  sit.
                </p>
              </h3>
            </div>
            <div className="order-1 flex-1 md:order-2">
              <figure
                style={{
                  fill: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="mb-10 w-full text-[200px] font-extrabold md:mb-0 md:ps-[100px]"
              >
                <MainLogoShort />
              </figure>
            </div>
          </div>
          <div className="mt-[60px]">
            <RCButton text={"See the work"} darkMode={darkMode} url="/work" />
          </div>
        </section>
        <section className="py-[100px] sm:px-[5%]">
          <CustomZoomCard data={wild_dest} darkMode={darkMode} />
        </section>
        <section className="pt-[100px]">
          <div className="w-full">
            <div
              className="px-[5%]"
              style={{
                color: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
              }}
            >
              <CustomLineInfo text={"00"} subText={"/05"} />
              <h2 className="my-20 text-3xl font-bold uppercase sm:text-5xl">
                Featured <br></br> Engagements
              </h2>
            </div>

            <SponsorComponent darkMode={darkMode} />
          </div>
        </section>
        <section className="w-full px-[5%] pt-20">
          <div id="stick" className="flex flex-col lg:flex-row">
            <div
              // ref={stickyRef}
              data-scroll
              data-scroll-sticky // Attibute that enables the sticky scroll
              data-scroll-target="#stick"
              className="order-2 h-full flex-1 py-5 text-center lg:order-1 lg:pb-0 lg:pt-36 lg:text-left"
              style={{
                color: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
              }}
            >
              <span className="block text-[6.25vw] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
                BASIC/DEPT® helps brands ● connect w/ culture
              </span>
              <span className="mt-10 block text-lg uppercase">
                Adweek <strong>Agency Spotlight</strong>
              </span>
              <p className="mt-8 lg:mt-10">
                <RCButton text={"About Us"} darkMode={darkMode} url="/about" />
              </p>
            </div>
            <div ref={imagesStickyRef} className="order-1 flex-1 lg:order-2">
              {module_data.map(({ imgContent, id }) => (
                <div key={id} className="relative mt-5 h-[400px] w-full">
                  <div className="absolute left-0 top-0 h-full w-full bg-black opacity-10"></div>
                  <img
                    className="h-full w-full object-cover"
                    src={imgContent.url}
                    alt={imgContent.alt}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-[5%] py-[100px]">
          <div className="mb-10 flex items-center justify-between">
            <h2
              style={{
                color: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
              }}
              className="max-w-sm text-lg font-semibold uppercase sm:text-5xl"
            >
              Featured News
            </h2>
            <div>
              <RCButton text={"View All"} darkMode={darkMode} url="/blog" />
            </div>
          </div>
          {news_data.map(({ title, date, imgContent, urlRedirect }) => (
            <div key={nanoid()}>
              <ArticleCard
                title={title}
                date={date}
                image={imgContent}
                url={urlRedirect}
                darkMode={darkMode}
              />
            </div>
          ))}
        </section>
        <Footer />
      </div>
      {/* <FirstLoadIntroComponent /> */}
    </>
  );
};

export default Home;
