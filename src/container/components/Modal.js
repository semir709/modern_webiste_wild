import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const variantsParent = {
  initial: { opacity: 0 },
  animate: { opacity: 0.6 },
};

const variantsChild = {
  initial: { translateX: "100%" },
  animate: {
    translateX: 0,
    transition: { duration: 0.4, delay: 0.3 },
  },
  exit: {
    translateX: "100%",
    transition: { duration: 0.2 },
  },
};

const titleData = {
  organization: "organization",
  award: "award",
  project: "project",
  year: "year",
};

const randomData = {
  organization: "CSS Awards",
  award: "Site of the Day",
  project: "Luminar",
  year: "2023",
};

const Modal = ({ hasFooter = false }) => {
  const [position, setPosition] = useState(0);
  const { scroll } = useLocomotiveScroll();
  const navigate = useNavigate();

  useEffect(() => {
    if (scroll) {
      const currentPosition = scroll.scroll.instance.scroll.y;
      setPosition(currentPosition);
      scroll.stop();
    }

    return () => {
      if (scroll) scroll.start();
    };
  }, [scroll]);
  return (
    <motion.div
      style={{ top: position }}
      className="fixed z-50 flex h-screen w-full justify-end text-customBlack"
    >
      <motion.div
        variants={variantsParent}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-black"
      />

      <motion.div
        variants={variantsChild}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative flex w-full lg:w-[75%]"
      >
        <div className="absolute right-0 top-0 p-5 lg:relative">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full border border-customBlack bg-white p-1 lg:border-none"
          >
            <IoMdClose fontSize={30} />
          </button>
        </div>
        <div className="flex h-full w-full flex-col bg-white pt-14 lg:pt-0">
          <div className="w-full px-5">
            <div className="w-full pt-5">
              <div className="flex w-full items-center justify-between">
                <div>
                  <span className="text-sm uppercase">(awards)</span>
                </div>
                <div>
                  <IoIosArrowDown />
                </div>
                <div>
                  <div className="rounded-full bg-customBlack p-2"></div>
                </div>
              </div>
              <div className="mt-2 h-[1px] w-full bg-customBlack"></div>
            </div>
          </div>
          {/* These part wil be child of a modal */}
          <div className="w-full overflow-auto px-5">
            <div className="w-full">
              <h3 className="py-36 font-semibold uppercase lg:p-36 lg:text-end lg:text-4xl">
                B®/Awrds.10 - 24©
              </h3>
              <div className="w-full">
                <div>
                  <BulletText content={titleData} isTitle={true} />
                </div>
                <ul>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
                    <li>
                      <BulletText content={randomData} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* These part wil be child of a modal
          {hasFooter && <div className="w-full bg-blue-300"></div>} */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

const BulletText = ({ isTitle = false, content }) => {
  return (
    <>
      <div className="grid grid-cols-2 text-xs uppercase lg:grid-cols-[25%,25%,40%,10%]">
        <div className="font-bold">
          <span>{content.organization}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
          <span>{content.award}</span>
        </div>
        <div className={`${isTitle && "font-bold"} `}>
          <span>{content.project}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
          <span>{content.year}</span>
        </div>
      </div>
      <div className="my-5 h-[1px] w-full bg-customBlack"></div>
    </>
  );
};
