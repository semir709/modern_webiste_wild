import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const imageVariant = {
  rest: {
    height: "75%",
  },
  hover: {
    height: "55%",
    transition: {
      duration: 0.5,
      ease: [0.28, 0, 0, 1],
    },
  },
};
const textVariant = {
  rest: {
    y: "-80%",
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.28, 0, 0, 1],
    },
  },
};

const SmoothCard = ({ setTextHover = false, url = false, number = 0 }) => {
  // const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // // setTextHover is probablly about making custom mouse convert to transparent

  // const onMouseClicked = (e) => {
  //   navigate(url);
  // };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1270);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <motion.li
      className="relative h-full w-full list-none text-customPrimary"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <div className="absolute left-0 top-0 h-fit w-full lg:h-full lg:w-fit">
        <div className="h-[0.1rem] w-full bg-customPrimary lg:h-[95%] lg:w-[0.1rem]"></div>
        <div className="ms-auto w-fit text-sm">{formatNumber(number)}</div>
      </div>
      <motion.div
        variants={imageVariant}
        className="pointer-events-none ms-2 hidden lg:block"
      >
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="test"
        />
      </motion.div>
      <div
        variants={imageVariant}
        className="pointer-events-none block pt-8 lg:hidden"
      >
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="test"
        />
      </div>
      <div className="text-sm font-medium lg:ms-2">
        <div className="uppercase">
          <h5 className="relative text-lg font-bold">
            B/D JAMS
            <span className="absolute right-0 top-0">2022</span>
          </h5>
          <span>It's vibe</span>
        </div>
        <motion.div variants={textVariant} className="mt-4 hidden lg:block">
          <p>
            Integer venenatis convallis pellentesque. Duis consequat leo dictum
            euismod tempus.
          </p>
          <Link to={url} className="mt-5 block font-bold underline">
            <span>Visit the Site</span>
          </Link>
        </motion.div>
        <div className="mt-4 block lg:hidden">
          <p>
            Integer venenatis convallis pellentesque. Duis consequat leo dictum
            euismod tempus.
          </p>
          <Link to={url} className="mt-5 block font-bold underline">
            <span>Visit the Site</span>
          </Link>
        </div>
      </div>
    </motion.li>
    // <li className="numberCounter list-counter-class relative h-full w-full flex-shrink-0 text-customPrimary">
    //   <motion.div
    //     className="horizontalLine h-full w-full px-2 pb-[70px]"
    //     initial="rest"
    //     whileHover="hover"
    //     animate="rest"
    //   >
    //     <motion.div
    //       variants={!isMobile && imageVariant}
    //       className="pointer-events-none h-full w-full"
    //     >
    //       <motion.img
    //         className="h-full w-full object-cover"
    //         src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //         alt="girl"
    //       />
    //     </motion.div>
    //     <motion.div className="px-3 pt-3 font-semibold">
    //       <h5 className="relative text-lg uppercase">
    //         B/D Jams <span className="absolute right-0">2023</span>
    //       </h5>
    //       <span className="text-[13px] uppercase">It is fun</span>
    //       <motion.div variants={!isMobile && textVariant}>
    //         <p className="mt-[25px] w-fit text-[13px]">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    //           quasi!
    //         </p>
    //         <Link
    //           className="block w-fit cursor-pointer pt-[50px] font-semibold underline underline-offset-4"
    //           // onMouseOver={() => setTextHover(true)}
    //           // onMouseOut={() => setTextHover(false)}
    //           onMouseUp={onMouseClicked}
    //         >
    //           <p onMouseDown={(e) => e.preventDefault()}> Visit the Site</p>
    //         </Link>
    //       </motion.div>
    //     </motion.div>
    //   </motion.div>
    // </li>
  );
};

export default SmoothCard;
