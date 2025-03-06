import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  CustomLineInfo,
  Footer,
  Navigation,
  ParticlesContainer,
  RCButton,
  TextFromBottomOverflow,
} from "../container/components";
import { AnimatePresence, motion } from "framer-motion";
import ListImageText from "../container/components/ListImageText";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AwardsModal from "./AwardsModal";
import TeamModal from "./TeamModal";

import { peoples_data } from "../data/peoples_data";

const title1 = [
  { id: nanoid(), text: "We turn" },
  { id: nanoid(), text: "cultural" },
  { id: nanoid(), text: "value" },
];

const title2 = [
  {
    id: nanoid(),
    text: (
      <div className="flex items-center">
        <span className="me-4 block h-fit">
          <div className="h-[40px] w-[40px] rounded-full bg-customPrimary md:h-[60px] md:w-[60px]"></div>
        </span>
        <span className="block">Into</span>
      </div>
    ),
  },
  { id: nanoid(), text: "company" },
  { id: nanoid(), text: "value" },
];

const titleMobile = [
  { id: nanoid(), text: "We turn cultural value" },
  {
    id: nanoid(),
    text: (
      <div className="">
        <div className="me-4 flex w-fit items-center">
          <span className="me-4 block h-fit">
            <div className="h-[40px] w-[40px] rounded-full bg-customPrimary md:h-[60px] md:w-[60px]"></div>
          </span>
          <span className="block">Into </span>
        </div>
        <span>company value</span>
      </div>
    ),
  },
];

const fakeData = [
  {
    id: nanoid(),
    url: "https://cdn.sanity.io/images/8nn8fua5/production/ead0a1be85db6e308cff0308de4a03f1d39a02a9-720x903.jpg?w=1280&fm=webp&q=65",
    alt: "test1",
  },
  {
    id: nanoid(),
    url: "https://cdn.sanity.io/images/8nn8fua5/production/8629b3f04cae6cff3fa18289b6eee4fd40c4f4e8-720x903.jpg?w=1280&fm=webp&q=65",
    alt: "test2",
  },
  {
    id: nanoid(),
    url: "https://cdn.sanity.io/images/8nn8fua5/production/efe6bb29a36ac6c1c3910e05109a8fcdff26f110-720x900.jpg?w=1280&fm=webp&q=65",
    alt: "test3",
  },
  {
    id: nanoid(),
    url: "https://cdn.sanity.io/images/8nn8fua5/production/f249af15eb93ccb7f8a796bfd04002670ee49870-720x900.jpg?w=1280&fm=webp&q=65",
    alt: "test4",
  },
];

const postionStyle = [
  "right-0 top-full -translate-y-full",
  "right-[20%] top-[10%] translate-x-[20%]",
  "right-full top-0 h-[70%] translate-x-full sm:right-1/2 sm:translate-x-1/2",
  "right-[40%] top-[80%] -translate-y-[80%] translate-x-[40%]",
];

const AboutPage = () => {
  const textColorNav = 0;
  const darkMode = true;
  const location = useLocation();
  const mainPath = location.pathname.split("/").slice(0, 3).join("/");

  return (
    <>
      <ParticlesContainer darkMode={darkMode} />
      <Navigation textColorNav={textColorNav} darkMode={darkMode} />
      <div data-scroll-section>
        <AnimatePresence mode="wait">
          <Routes location={location} key={mainPath}>
            <Route path="/awards" element={<AwardsModal />} />
            <Route path="/team/:person" element={<TeamModal />} />
          </Routes>
        </AnimatePresence>
        <main className="px-[5%] text-customPrimary">
          <section className="py-40">
            <h1 className="ljustify-between justify-start text-8xl font-bold uppercase lg:flex lg:h-[500px]">
              <div className="hidden flex-1 self-start lg:block">
                <TextFromBottomOverflow text={title1} />
              </div>
              <div className="hidden flex-1 self-end lg:block">
                <TextFromBottomOverflow text={title2} />
              </div>
              <div className="block text-4xl sm:text-6xl lg:hidden">
                <TextFromBottomOverflow text={titleMobile} />
              </div>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: [0.72, 0, 0.28, 1] },
              }}
              className="mt-5 flex w-full justify-end text-lg font-semibold md:text-2xl"
            >
              <p className="lg:w-1/2">
                BEAUTIFUK/WILD® is a global agency that thrives at the
                intersection of design, data, and technology. Together, we’re
                focused on transforming brands and culture — across the world.
              </p>
            </motion.div>
            <div className="mt-20 w-full">
              <div className="mb-5 font-bold">
                <span>B/W®</span>
              </div>
              <CustomLineInfo
                text={"2010-"}
                subText={"present"}
                darkMode={true}
              />
            </div>
          </section>
          <section className="relative my-40 w-full">
            <ul className="relative h-[1000px] w-full">
              {fakeData.map(({ id, url, alt }, index) => (
                <li
                  key={id}
                  className={`absolute h-[70%] w-[80%] hover:z-40 min-[350px]:w-[60%] sm:w-[35%] ${postionStyle[index % postionStyle.length]}`}
                >
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full object-cover"
                      src={url}
                      alt={alt}
                    ></img>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-[30%] left-0 -translate-y-1/2 text-xs uppercase leading-3 sm:bottom-[10%]">
              <p>
                Easy to understand. <br />
                Impossible to ignore.™ <br /> BEAUTIFUL/WILD®, Inc 10 - 24©
              </p>
            </div>
          </section>
          <section className="text-customPrimarys">
            <div className="border-t-2 border-customPrimary">
              <h5 className="my-4 text-lg font-bold uppercase sm:text-4xl md:text-9xl">
                Beautiful/Wild
              </h5>
              <CustomLineInfo text={"sec."} subText={"/a"} darkMode={true} />
            </div>
            <div className="my-5 lg:flex">
              <div className="mb-10 mt-10 lg:mt-0 lg:w-[40%]">
                <h2 className="text-4xl font-bold uppercase">
                  Agency <br className="hidden lg:block" /> Snapshot
                </h2>
              </div>
              <ul className="grid gap-24 lg:w-[60%] lg:grid-cols-2">
                <li className="relative lg:pe-20">
                  <div className="ms-[40%] font-bold uppercase lg:ms-0">
                    <h6 className="mb-4 lg:text-2xl">People</h6>
                    <span className="absolute left-0 top-0 text-4xl lg:static lg:text-6xl">
                      120+
                    </span>
                    <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                      We're a world-class team of diverse individuals who are
                      here to do great work as well as be great to work with.
                    </p>
                  </div>
                </li>
                <li className="relative lg:pe-20">
                  <div className="ms-[40%] font-bold uppercase lg:ms-0">
                    <h6 className="mb-4 lg:text-2xl">People</h6>
                    <span className="absolute left-0 top-0 text-4xl lg:static lg:text-6xl">
                      120+
                    </span>
                    <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                      We're a world-class team of diverse individuals who are
                      here to do great work as well as be great to work with.
                    </p>
                  </div>
                </li>
                <li className="relative lg:pe-20">
                  <div className="ms-[40%] font-bold uppercase lg:ms-0">
                    <h6 className="mb-4 lg:text-2xl">People</h6>
                    <span className="absolute left-0 top-0 text-4xl lg:static lg:text-6xl">
                      120+
                    </span>
                    <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                      We're a world-class team of diverse individuals who are
                      here to do great work as well as be great to work with.
                    </p>
                  </div>
                </li>
                <li className="relative lg:pe-20">
                  <div className="ms-[40%] font-bold uppercase lg:ms-0">
                    <h6 className="mb-4 lg:text-2xl">People</h6>
                    <span className="absolute left-0 top-0 text-4xl lg:static lg:text-6xl">
                      120+
                    </span>
                    <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                      We're a world-class team of diverse individuals who are
                      here to do great work as well as be great to work with.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="text-customPrimarys my-40">
            <div className="">
              <CustomLineInfo text={"sec."} subText={"/b"} darkMode={true} />
            </div>
            <div className="my-5 lg:flex">
              <div className="mb-10 mt-10 lg:mt-0 lg:w-[40%]">
                <h2 className="text-lg font-bold uppercase sm:text-4xl">
                  Capabilities
                </h2>
              </div>
              <ul className="grid gap-24 sm:grid-cols-2 lg:w-[60%]">
                <li className="relative lg:pe-20">
                  <div className="font-bold uppercase">
                    <h6 className="mb-4 lg:text-2xl">
                      CX, Commerce, & Product Design
                    </h6>

                    <div>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                    </div>
                  </div>
                </li>
                <li className="relative lg:pe-20">
                  <div className="font-bold uppercase">
                    <h6 className="mb-4 lg:text-2xl">
                      CX, Commerce, & Product Design
                    </h6>

                    <div>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                      <p className="mt-4 text-sm font-normal normal-case lg:text-base">
                        Market Analysis & Business Case Development
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="mb-10">
              <CustomLineInfo text={"Sec."} subText={"/c"} darkMode={true} />
            </div>
            <div className="lg:flex">
              <div className="mb-10 mt-10 lg:mt-0 lg:w-[40%]">
                <h2 className="text-lg font-bold uppercase sm:text-4xl">
                  Awards
                </h2>
              </div>
              <div className="lg:w-[60%]">
                <p className="mb-10 text-lg font-semibold lg:w-1/2 lg:text-3xl">
                  While results are what matter most, we believe awards bring
                  value and recognition to organizations as well as individuals.
                </p>
                <p>
                  <RCButton darkMode={true} text={"Full awards lits"} />
                </p>
              </div>
            </div>

            <ListImageText />
          </section>
          <section className="my-20">
            <div className="mb-10">
              <CustomLineInfo text={"Sec."} subText={"/d"} darkMode={true} />
            </div>
            <div className="pt-10 lg:flex">
              <div className="mb-10 mt-10 lg:mt-0 lg:w-[40%]">
                <h2 className="text-lg font-bold uppercase sm:text-4xl">
                  Team & Leadership
                </h2>
              </div>
              <div className="lg:w-[60%]">
                <p className="mb-10 text-lg font-semibold lg:w-2/3 lg:text-3xl">
                  We’re 120+ individuals from across the world driven by bold
                  ideas and diverse perspectives. Craft, service, and efficiency
                  drive us forward and we see our agency as a place for our
                  shared values to collide.
                </p>
              </div>
            </div>

            <div className="w-full">
              <ul className="grid gap-5 lg:grid-cols-2">
                {peoples_data.map(({ id, name, image, slug, role }) => (
                  <li key={id} className="my-5 hover:underline">
                    <Link to={`team/${slug}`}>
                      <div className="flex gap-5">
                        <div className="h-full w-full">
                          <img
                            className="h-auto w-full object-cover"
                            alt={image.mainImage.alt}
                            src={image.mainImage.url}
                          />
                        </div>
                        <div className="h-full w-full">
                          <img
                            className="h-auto w-full object-cover"
                            alt={image.darkImage.alt}
                            src={image.darkImage.url}
                          />
                        </div>
                      </div>
                      <div className="mt-5 uppercase leading-4 lg:text-lg lg:leading-5">
                        <span>
                          {name}
                          <br />
                          <strong>{role}</strong>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <Footer lightMode={true} />
      </div>
    </>
  );
};

export default AboutPage;
