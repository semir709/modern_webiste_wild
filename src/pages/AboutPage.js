import { nanoid } from "nanoid";
import { useEffect } from "react";
import {
  CustomLineInfo,
  Footer,
  TextFromBottomOverflow,
} from "../container/components";

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

// company value
const AboutPage = ({ setDarkMode }) => {
  useEffect(() => {
    setDarkMode(true);
  }, [setDarkMode]);
  return (
    <div data-scroll-section>
      <main className="mt-40 px-[5%] text-customPrimary">
        <section className="mb-40">
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
          <div className="mt-5 flex w-full justify-end text-lg font-semibold md:text-2xl">
            <p className="lg:w-1/2">
              BEAUTIFUK/WILD® is a global agency that thrives at the
              intersection of design, data, and technology. Together, we’re
              focused on transforming brands and culture — across the world.
            </p>
          </div>
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
          <ul className="relative ms-auto h-[900px] w-[70%] bg-gray-300 font-semibold">
            <div className="absolute bottom-[0] right-[0] w-[60%] hover:z-50">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/ead0a1be85db6e308cff0308de4a03f1d39a02a9-720x903.jpg?w=1280&fm=webp&q=65"
                  alt="test"
                ></img>
              </div>
              <div className="mt-2">
                <span>(01)</span>
              </div>
            </div>
            <div className="absolute bottom-[20%] right-[10%] flex h-fit w-[60%] hover:z-50">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/8629b3f04cae6cff3fa18289b6eee4fd40c4f4e8-720x903.jpg?w=1280&fm=webp&q=65"
                  alt="test"
                ></img>
              </div>
              <div className="ms-2">
                <span>(02)</span>
              </div>
            </div>
            <div className="absolute left-0 top-0 w-[60%] hover:z-50">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/efe6bb29a36ac6c1c3910e05109a8fcdff26f110-720x900.jpg?w=1280&fm=webp&q=65"
                  alt="test"
                ></img>
              </div>
              <div className="mt-2">
                <span>(03)</span>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 hover:z-50">
              <div className="w-full">
                <img
                  className="h-full w-full object-cover"
                  src="https://cdn.sanity.io/images/8nn8fua5/production/f249af15eb93ccb7f8a796bfd04002670ee49870-720x900.jpg?w=1280&fm=webp&q=65"
                  alt="test"
                ></img>
              </div>
              <div className="mt-2">
                <span>(04)</span>
              </div>
            </div>
          </ul>
          <div className="absolute bottom-[10%] left-0 -translate-y-1/2 text-xs uppercase leading-3">
            <p>
              Easy to understand. <br />
              Impossible to ignore.™ <br /> BEAUTIFUL/WILD®, Inc 10 - 24©
            </p>
          </div>
        </section>
      </main>
      <Footer lightMode={true} />
    </div>
  );
};

export default AboutPage;
