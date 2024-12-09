import React, { useEffect, useRef } from "react";
import {
  Footer,
  SocialMedia,
  TextFromBottomOverflow,
} from "../container/components";
import { nanoid } from "nanoid";
import { IoIosArrowDown } from "react-icons/io";

import { motion } from "framer-motion";

const titleArray = [
  { id: nanoid(), text: "New Projects on the Podium for" },
  { id: nanoid(), text: "the 28th Webby Awards" },
];
// const dot = [
//   {
//     id: nanoid(),
//     text: (
//       <>
//         <div className="h-[40px] w-[40px] rounded-full bg-customPrimary"></div>
//       </>
//     ),
//   },
// ];

const colorPalet = {
  light: { text: "#252422" },
  dark: { text: "#f9cdcd" },
};

const Blog = ({ setDarkMode, darkMode }) => {
  const stickyRef = useRef();
  const stickyLeftRef = useRef();
  const sectionInfoRef = useRef();
  const sectionTitleref = useRef();

  // fix bug darkmod overlap colors
  // responsive
  // image

  useEffect(() => {
    const sectionInfo = sectionInfoRef.current;
    const sectionTitle = sectionTitleref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entri) => {
        if (entri.isIntersecting) {
          if (entri.target === sectionInfo) setDarkMode(false);
          else if (entri.target === sectionTitle) setDarkMode(true);
        }
      });
    });

    if (sectionInfo) observer.observe(sectionInfo);
    if (sectionInfo) observer.observe(sectionTitle);

    return () => {
      if (sectionInfo) observer.unobserve(sectionInfo);
      if (sectionInfo) observer.unobserve(sectionTitle);
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
        <section
          id="stick"
          ref={sectionTitleref}
          className="mb-40 h-[1270px] py-60"
        >
          <div
            ref={stickyRef}
            data-scroll
            data-scroll-sticky // Attibute that enables the sticky scroll
            data-scroll-target="#stick"
            className="top-0"
          >
            <div className="flex justify-between">
              <h1 className="text-5xl font-semibold uppercase">
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
                    className="h-[40px] w-[40px] rounded-full"
                    style={{
                      background: !darkMode
                        ? colorPalet.light.text
                        : colorPalet.dark.text,
                    }}
                  ></motion.div>
                </div>
                {/* <TextFromBottomOverflow
                  text={[
                    {
                      id: nanoid(),
                      text: (
                        <>
                          <div
                            className="h-[40px] w-[40px] rounded-full"
                            style={{
                              background: !darkMode
                                ? colorPalet.light.text
                                : colorPalet.dark.text,
                            }}
                          ></div>
                        </>
                      ),
                    },
                  ]}
                /> */}
              </div>
            </div>
            <div className="py-40 font-semibold uppercase">
              <div className="text-8xl">
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
              <div className="flex w-full items-center justify-between">
                <div>
                  <span>awards</span>
                </div>
                <div>
                  <span>Date Published (4.24.24)</span>
                </div>
                <div>
                  <span>Read Time 3 Min</span>
                </div>
                <div>
                  <span>
                    <IoIosArrowDown fontSize={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-[400px] w-[400px] bg-red-300"></div>
        </section>
        <secitio className="w-full" ref={sectionInfoRef}>
          <div className="flex justify-between" id="stickleft">
            <div
              ref={stickyLeftRef}
              data-scroll
              data-scroll-sticky // Attibute that enables the sticky scroll
              data-scroll-target="#stickleft"
              className="h-fit"
            >
              <div className="w-[200px] pt-16 text-sm uppercase">
                <span className="block">
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
            <div className="w-1/2 pe-24 text-lg">
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
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
                  Cowboy is a Webby Winner in Websites and Mobile Sites - Best
                  Visual Design - Function
                </li>
                <li className="mb-3 list-disc">
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
