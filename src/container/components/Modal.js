import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

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
      className="fixed z-50 flex h-screen w-full justify-end"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 bg-black"
      />

      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: 0, transition: { duration: 0.4, delay: 0.3 } }}
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
        <div className="h-full w-full bg-white"></div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
