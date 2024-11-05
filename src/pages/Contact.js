import { nanoid } from "nanoid";
import {
  CustomLineInfo,
  Footer,
  ImageSmoothHeight,
  OfficesCard,
  RCButton,
  TextFromBottomOverflow,
} from "../container/components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { email_contact } from "../data/email_contact";
import { useEffect } from "react";
import kitty from "../assets/img/kitty.jpg";

import { building_data } from "../data/buildings_data";

const title = [
  { id: nanoid(), text: "b/w" },
  { id: nanoid(), text: "Contact" },
];

const varinatsOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.72, 0, 0.28, 1],
      delay: 0.8,
    },
  },
};

const Contact = ({ setTextColorNav }) => {
  useEffect(() => {
    setTextColorNav(1);
  }, [setTextColorNav]);

  return (
    <div data-scroll-section>
      <main className="px-[5%] pt-40">
        <section className="mb-24 min-h-screen">
          <div className="relative w-full">
            <div className="right-0 top-0 mb-5 flex h-1/2 w-full flex-col justify-center lg:absolute lg:mb-0 lg:w-1/2 lg:ps-5">
              <h1 className="text-4xl font-bold uppercase sm:text-6xl">
                <TextFromBottomOverflow text={title} />
              </h1>
              <motion.div
                variants={varinatsOpacity}
                initial="initial"
                animate="animate"
                className="mt-12 text-xs uppercase leading-3"
              >
                <span>
                  Easy to understand. <br /> Impossible to ignore.™ <br />
                  Beautiful/wild®
                </span>
              </motion.div>
            </div>
            <div className="mb-5 h-full w-full lg:mb-0 lg:w-1/2">
              <ImageSmoothHeight src={kitty} alt={"kitty"} />
            </div>
            <div className="bottom-0 right-0 h-1/2 w-full ps-0 lg:absolute lg:w-1/2 lg:ps-5">
              <div className="justify-between sm:flex">
                <TextFromBottomOverflow
                  text={[
                    {
                      text: (
                        <div className="my-5 h-[40px] w-[40px] rounded-full bg-customBlack sm:my-0 lg:h-[60px] lg:w-[60px]"></div>
                      ),
                    },
                  ]}
                />

                <motion.div
                  variants={varinatsOpacity}
                  initial="initial"
                  animate="animate"
                  className="grid h-full w-full grid-cols-1 gap-2 sm:w-3/4 lg:gap-6 min-[1300px]:grid-cols-2"
                >
                  {email_contact.map(({ id, title, email, slug }) => {
                    if (slug === "join_us") {
                      return (
                        <div key={id} className="h-full w-full">
                          <h5 className="text-lg font-bold uppercase lg:mb-5">
                            {title}
                          </h5>
                          <p>
                            <Link className="underline hover:no-underline">
                              {email}
                            </Link>
                            <div className="text-sm font-semibold">
                              <span>(Various Openings)</span>
                            </div>
                          </p>
                          <div className="mt-5">
                            <RCButton text="Applay now" />
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={id} className="h-full w-full">
                          <h5 className="mb-5 text-lg font-bold uppercase">
                            {title}
                          </h5>
                          <p>
                            <Link className="underline hover:no-underline">
                              {email}
                            </Link>
                          </p>
                        </div>
                      );
                    }
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex">
            <div className="mb-5 lg:mb-0 lg:w-[30%]">
              <h2 className="text-4xl font-bold uppercase">Offices</h2>
            </div>
            <div className="flex lg:w-[70%]">
              <div className="me-3 hidden h-full w-[1px] bg-customBlack lg:block"></div>
              <div className="w-full">
                <ul className="grid sm:grid-cols-2">
                  {building_data.map(
                    ({ location, time, address, imgContent }, index) => {
                      const isOdd = index % 2 !== 0;
                      const isEnd =
                        index === building_data.length - 2 ||
                        index === building_data.length - 1;

                      return (
                        <OfficesCard
                          rightLine={!isOdd}
                          bottomLine={!isEnd}
                          location={location}
                          address={address}
                          time={time}
                          imgContent={imgContent}
                        />
                      );
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-60 mt-40">
          <CustomLineInfo text={"sec."} subText={"/a"} />

          <div className="mt-12 justify-between md:flex">
            <h5 className="text-4xl font-bold uppercase">Follow</h5>
            <ul className="mt-10 md:mt-0 md:w-[60%]">
              <h5 className="mb-5 text-2xl font-bold uppercase">Social</h5>
              <div className="underline">
                <li className="mb-2 cursor-pointer">Instagram</li>
                <li className="mb-2 cursor-pointer">Twitter</li>
                <li className="mb-2 cursor-pointer">Linkedln</li>
                <li className="mb-2 cursor-pointer">Facebook</li>
              </div>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
