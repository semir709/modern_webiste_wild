import { useEffect, useRef } from "react";
import {
  Footer,
  SocialMedia,
  TextFromBottomOverflow,
} from "../container/components";
import { nanoid } from "nanoid";
import { IoIosArrowDown } from "react-icons/io";

import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const titleArray = [
  { id: nanoid(), text: "New Projects on the Podium for" },
  { id: nanoid(), text: "the 28th Webby Awards" },
];

const colorPalet = {
  light: { text: "#252422" },
  dark: { text: "#f9cdcd" },
};

// responsive

const Blog = ({ setDarkMode, darkMode }) => {
  const mainContentRef = useRef();
  const stickyLeftRef = useRef();
  const heroSectionRef = useRef();
  const imgContentRef = useRef();

  const imageEndPositionTweak = 140;

  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    const handleScroll = (obj) => {
      const newPosition = obj.scroll.y;
      const mainContent = mainContentRef.current;
      const screenHeight = window.innerHeight;
      const imgHeight = imgContentRef.current.clientHeight;

      if (newPosition > screenHeight / 2 + imgHeight - imageEndPositionTweak)
        return;

      mainContent.style.transform = `matrix(1, 0, 0, 1, 0, ${newPosition})`;
    };

    if (scroll) {
      scroll.on("scroll", handleScroll);
    }

    return () => {
      if (scroll) {
        scroll.off("scroll", handleScroll);
      }
    };
  }, [scroll]);

  useEffect(() => {
    const heroSection = heroSectionRef.current;

    setDarkMode(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setDarkMode(true);
        else setDarkMode(false);
      },
      { threshold: 0 },
    );

    if (heroSection) observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, [setDarkMode]);

  return (
    <div data-scroll-section>
      <main
        className="mb-40 px-[5%]"
        style={{
          color: !darkMode ? colorPalet.light.text : colorPalet.dark.text,
        }}
      >
        <section className="relative mb-60" ref={heroSectionRef}>
          <div
            ref={mainContentRef}
            className="flex h-screen flex-col justify-between"
          >
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-between">
              <h1 className="2xl font-semibold uppercase sm:text-5xl">
                <TextFromBottomOverflow text={titleArray} />
              </h1>
              <div>
                <div className="h-fit overflow-hidden">
                  <motion.div
                    initial={{
                      translateY: "100%",
                    }}
                    animate={{
                      translateY: "0",
                      transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
                    }}
                    className="h-[20px] w-[20px] rounded-full sm:h-[40px] sm:w-[40px]"
                    style={{
                      background: !darkMode
                        ? colorPalet.light.text
                        : colorPalet.dark.text,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="flex-1 font-semibold uppercase">
              <div className="text-4xl sm:text-8xl">
                <span>4.24.24</span>
              </div>
              <div
                className="my-4 h-[1px] w-full"
                style={{
                  background: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
              ></div>
              <div className="w-full items-center justify-between text-xs sm:flex sm:text-base">
                <div className="flex-1">
                  <span>awards</span>
                </div>
                <div className="flex-1">
                  <span>Date Published (4.24.24)</span>
                </div>
                <div className="flex-1">
                  <span>Read Time 3 Min</span>
                </div>
                <div className="ms-auto w-fit sm:ms-0">
                  <span>
                    <IoIosArrowDown fontSize={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full" ref={imgContentRef}>
            <div className="mx-auto h-1/2 w-1/2">
              <div className="h-full w-full">
                <img
                  className="h-full w-full object-cover"
                  alt="hey"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/e1ee6f1258bdc530b8843f97029f804856f72d61-2000x1468.jpg?w=1280&fm=webp&q=65"
                />
              </div>
            </div>
          </div>
        </section>
        <secitio className="mt-40 w-full">
          <div className="justify-between sm:flex" id="stickleft">
            <div
              ref={stickyLeftRef}
              data-scroll
              data-scroll-sticky
              data-scroll-target="#stickleft"
              className="h-fit"
            >
              <div className="pt-16 text-xs uppercase sm:w-[200px] sm:text-sm">
                <span className="sm:block">
                  <strong>Events</strong>
                </span>
                <span className="block">
                  The Future of Fashion and AI at Glossy's Ecommerce Summit
                </span>
                <span className="mt-5 block">(6.13.24)</span>
              </div>
              <div className="mt-10">
                <SocialMedia darkMode={darkMode} />
              </div>
            </div>
            <div className="mt-10 text-sm sm:mt-0 sm:w-1/2 sm:pe-24 sm:text-lg">
              <p>
                We’re humbled by the news of eight Webby Awards for
                BASIC/DEPT®, plus Agency of the Year and Network of the Year
                for our parent, DEPT®.
              </p>
              <p className="my-5">
                A big shout out to our global team. And of course, to our
                friends and family for voting. We're excited and grateful, but
                we're hungry for more so stay tuned. Check out our full list of
                wins below:
              </p>
              <ul className="my-5">
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 sm:list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
              </ul>
            </div>
          </div>
        </secitio>
      </main>

      <Footer lightMode={darkMode} />
    </div>
  );
};

export default Blog;
