import { motion } from "framer-motion";

const variantsParanet = {
  start: { height: "100vh" },
  end: {
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const variantsChildren = {
  start: { height: "100%" },
  end: {
    height: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

const FirstLoadIntroComponent = ({ videoLoaded = false }) => {
  return (
    <motion.div
      className="fixed left-0 top-0 h-full w-full"
      variants={variantsParanet}
      initial="start"
      animate={videoLoaded && "end"}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-white">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-[200px] text-center text-4xl font-extrabold uppercase leading-none text-customBlack sm:text-[100px]">
            <motion.div className="overflow-hidden" variants={variantsChildren}>
              Beautiful <br /> wild
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstLoadIntroComponent;
