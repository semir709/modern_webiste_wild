import { motion, Container } from "framer-motion";

const imageVarinat = {
  rest: {
    height: "100%",
  },
  hover: {
    height: "35%",

    transition: {
      duration: 0.4,
    },
  },
};

const textVarinat = {
  rest: {
    y: "-80px",
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SmoothCard = () => {
  return (
    <li className=" w-[27%] flex-shrink-0 h-full me-5 relative list-counter-class">
      <motion.div
        className="h-full flex flex-col px-2 horizontalLine numberCounter"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div variants={imageVarinat} className="bg-green-300">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="girl"
          />
        </motion.div>
        <motion.div className=" h-1/2  bg px-3 pt-3 ">
          <h5 className="relative text-lg uppercase font-semibold">
            B/D Jams <span className="absolute right-0">2023</span>
          </h5>
          <span className="uppercase text-xs ">It is fun</span>
          <motion.div variants={textVarinat}>
            <p className="mb-[50px] mt-[25px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quasi!
            </p>
            <a className="font-semibold underline">Visit the Site</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </li>
  );
};

export default SmoothCard;