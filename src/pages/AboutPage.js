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
      </main>
      <Footer lightMode={true} />
    </div>
  );
};

export default AboutPage;
