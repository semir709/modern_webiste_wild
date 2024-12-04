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

const Modal = () => {
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
        className="relative flex w-[75%]"
      >
        <div className="p-5">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-white p-1"
          >
            <IoMdClose fontSize={30} />
          </button>
        </div>
        <div className="flex h-full w-full flex-col bg-white">
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
          <div className="w-full overflow-auto px-5">
            <div className="w-full">
              <h3 className="p-36 text-end text-4xl font-semibold uppercase">
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
          {/* <div className="w-full bg-blue-300"></div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

const BulletText = ({ isTitle = false, content }) => {
  return (
    <>
      <div className="grid grid-cols-5 text-xs uppercase">
        <div className="font-bold">
          <span>{content.organization}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
          <span>{content.award}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
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
