import { useEffect, useState } from "react";
import {
  Footer,
  ImageSmoothHeight,
  Navigation,
  ParticlesContainer,
  RCButton,
  TextFromBottomOverflow,
} from "../container/components/index";
import shark from "../assets/img/shark.jpg";
import { nanoid } from "nanoid";

const title = [
  { id: nanoid(), text: "Make" },
  { id: nanoid(), text: "B/W Great." },
  {
    id: nanoid(),
    text: (
      <div className="flex items-center">
        <span className="me-5 block h-fit text-9xl sm:me-32">
          <div className="h-[40px] w-[40px] rounded-full bg-customPrimary md:h-[60px] md:w-[60px]"></div>
        </span>
        <span className="block">Get</span>
      </div>
    ),
  },
  { id: nanoid(), text: "Paid." },
];

const CareersPage = () => {
  const textColorNav = 0;
  const darkMode = true;

  return (
    <>
      <Navigation textColorNav={textColorNav} darkMode={darkMode} />
      <ParticlesContainer darkMode={darkMode} />
      <div data-scroll-section>
        <main className="mb-60">
          <section className="flex flex-col px-[5%] pt-40 text-customPrimary sm:flex-row">
            <div className="mb-12 flex-1 sm:mb-0">
              <h1 className="mb-28 mt-16 text-6xl font-bold uppercase md:mt-32 md:text-8xl">
                <TextFromBottomOverflow text={title} />
              </h1>
              <div className="mt-5 w-40">
                <span className="block text-xs uppercase">
                  Make great work. <br /> Work with great people. <br />
                  BASIC/DEPT®, Inc 10 - 24©
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ImageSmoothHeight src={shark} alt={"shark"} />
              <div className="mt-5 text-sm font-semibold uppercase">
                <span>
                  Openings <b>(0)</b>
                </span>
                <span className="ms-12 sm:ms-36">
                  Offices <b>(08)</b>
                </span>
              </div>
              <div className="mt-36">
                <div className="flex gap-10 text-3xl font-semibold">
                  <p>
                    As part of Dept, we operate offices across the world. We’re
                    always looking to connect with individuals who want to make
                    the best work of their lives with the world’s greatest
                    brands. If you’re interested in working with us or learning
                    more, drop us a note, portfolio link, or résumé. We’ll take
                    anything you’ve got.
                  </p>
                  <span className="hidden sm:block">●</span>
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
    </>
  );
};

export default CareersPage;
