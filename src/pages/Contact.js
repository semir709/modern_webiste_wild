import { nanoid } from "nanoid";
import {
  ImageSmoothHeight,
  RCButton,
  TextFromBottomOverflow,
} from "../container/components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const title = [
  { id: nanoid(), text: "b/w" },
  { id: nanoid(), text: "Contact" },
];

const email_contact = [
  {
    id: nanoid(),
    title: "New Business",
    email: "biz@basicagency.com",
    slug: "new_business",
  },
  {
    id: nanoid(),
    title: "General",
    email: "hi@basicagency.com",
    slug: "general",
  },
  {
    id: nanoid(),
    title: "Press",
    email: "press@basicagency.com",
    slug: "press",
  },
  {
    id: nanoid(),
    title: "Join Us",
    email: "recruitment@basicagency.com",
    slug: "join_us",
  },
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
const Contact = () => {
  return (
    <div data-scroll-section>
      <main className="px-[5%] pt-40">
        <section>
          <div className="relative w-full">
            <div className="right-0 top-0 flex h-1/2 w-1/2 flex-col justify-center ps-5 sm:absolute">
              <h1 className="text-6xl font-bold uppercase">
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
            <div className="w-1/2">
              <ImageSmoothHeight
                src={
                  "https://cdn.sanity.io/images/8nn8fua5/production/cb0aa290219a3dc370e4b6a6c4f4b3effee44767-1736x2430.jpg?w=1280&fm=webp&q=65"
                }
                alt={"tet"}
              />
            </div>
            <div className="bottom-0 right-0 h-1/2 w-1/2 ps-5 sm:absolute">
              <div className="flex justify-between">
                <TextFromBottomOverflow
                  text={[
                    {
                      text: (
                        <div className="h-[60px] w-[60px] rounded-full bg-customBlack"></div>
                      ),
                    },
                  ]}
                />

                <motion.div
                  variants={varinatsOpacity}
                  initial="initial"
                  animate="animate"
                  className="grid h-full w-3/4 grid-cols-2 gap-10"
                >
                  {email_contact.map(({ id, title, email, slug }) => {
                    if (slug === "join_us") {
                      return (
                        <div key={id} className="h-full w-full">
                          <h5 className="mb-5 text-lg font-bold uppercase">
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
        <section>2</section>
        <section>3</section>
      </main>
    </div>
  );
};

export default Contact;
