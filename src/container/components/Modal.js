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

const Modal = ({ children, subTextTitle = "" }) => {
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
                  <span className="text-sm uppercase">{subTextTitle}</span>
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
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
