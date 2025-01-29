import React, { useState } from "react";
import {
  CustomZoomCard,
  Footer,
  Navigation,
  ParticlesContainer,
  RCButton,
  TextFromBottomOverflow,
} from "../container/components";
import { nanoid } from "nanoid";
import { wild_dest } from "../data/wild_dest";

const title = [
  { id: nanoid(), text: "Easy to" },
  { id: nanoid(), text: "understand." },
  {
    id: nanoid(),
    text: (
      <div className="flex items-center">
        <span className="me-5 block h-fit text-9xl sm:me-32">
          <div className="h-[40px] w-[40px] rounded-full bg-customBlack md:h-[60px] md:w-[60px]"></div>
        </span>
        <span className="block">Impossible</span>
      </div>
    ),
  },
  { id: nanoid(), text: "toignore." },
];

const dest = [
  {
    title: "Patogania",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur eget aliquet mi, sed malesuada eros.",
    type: "img",
    src: {
      img: "https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&fm=webp&q=65",
      alt: "mounten",
    },
  },
  {
    title: "Patogania",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur eget aliquet mi, sed malesuada eros.",
    type: "img",
    src: {
      img: "https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&fm=webp&q=65",
      alt: "mounten",
    },
  },
];

const WorkPage = () => {
  const textColorNav = 1;
  const darkMode = false;

  return (
    <>
      <Navigation textColorNav={textColorNav} darkMode={darkMode} />
      <ParticlesContainer darkMode={darkMode} />
      <div data-scroll-section>
        <main className="pt-40">
          <section className="text-customBlack">
            <div className="px-[5%]">
              <h1 className="mb-28 mt-16 text-2xl font-bold uppercase min-[300px]:text-4xl sm:text-6xl md:mt-32 md:text-8xl">
                <TextFromBottomOverflow text={title} />
              </h1>
              <div className="mt-40">
                <div className="w-[80%] text-sm font-semibold sm:w-[50%] sm:text-base md:w-1/3">
                  <p>
                    The work we create lives at the intersection of clarity and
                    surprise and positions brands in culture through shared
                    values and ideals.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-40">
              <ol>
                <li className="w-full gap-3 pt-4">
                  <div className="mb-5 px-[5%]">
                    <div className="h-[1px] w-full bg-customBlack"></div>
                  </div>
                  <div className="gap-3 sm:px-[5%] md:flex">
                    <div className="px-[5%] sm:px-0 md:w-[35%] md:border-r-[1px] md:border-customBlack">
                      <div className="flex w-full justify-between pe-2">
                        <span>01</span>
                        <span>/04</span>
                      </div>
                      <div className="my-10 w-3/4 md:my-[50%]">
                        <h2 className="mb-5 text-4xl font-bold uppercase">
                          Branded eCommerce
                        </h2>
                        <p className="mb-5 font-semibold">
                          We go beyond best practices and build best-in-class
                          D2C channels that drive commerce, shape culture, and
                          define categories.
                        </p>
                        <div>
                          <RCButton text={"Learn More"} />
                        </div>
                      </div>
                    </div>
                    <ul className="md:w-[65%]">
                      <CustomZoomCard data={wild_dest.slice(0, 2)} />
                    </ul>
                  </div>
                </li>
                <li className="w-full gap-3 pt-4">
                  <div className="mb-5 px-[5%]">
                    <div className="h-[1px] w-full bg-customBlack"></div>
                  </div>
                  <div className="gap-3 sm:px-[5%] md:flex">
                    <div className="px-[5%] sm:px-0 md:w-[35%] md:border-r-[1px] md:border-customBlack">
                      <div className="flex w-full justify-between pe-2">
                        <span>01</span>
                        <span>/04</span>
                      </div>
                      <div className="my-10 w-3/4 md:my-[50%]">
                        <h2 className="mb-5 text-4xl font-bold uppercase">
                          Branded eCommerce
                        </h2>
                        <p className="mb-5 font-semibold">
                          We go beyond best practices and build best-in-class
                          D2C channels that drive commerce, shape culture, and
                          define categories.
                        </p>
                        <div>
                          <RCButton text={"Learn More"} />
                        </div>
                      </div>
                    </div>
                    <ul className="md:w-[65%]">
                      <CustomZoomCard data={wild_dest.slice(0, 2)} />
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WorkPage;
