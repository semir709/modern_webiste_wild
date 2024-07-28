import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const imageVarinat = {
  rest: {
    height: "80%",
  },
  hover: {
    height: "45%",

    transition: {
      duration: 0.5,
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
      duration: 0.8,
      y: { bounce: 0 },
    },
  },
};

const SmoothCard = ({ setTextHover = false, url = false }) => {
  const navigate = useNavigate();

  const onMouseClicked = (e) => {
    navigate(url);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1270);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <li className="numberCounter list-counter-class relative h-full w-full flex-shrink-0 min-[1270px]:w-[34%]">
      <motion.div
        className="horizontalLine h-full px-2 pb-[70px]"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          variants={!isMobile && imageVarinat}
          className="pointer-events-none"
        >
          <motion.img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="girl"
          />
        </motion.div>
        <motion.div className="px-3 pt-3 font-semibold">
          <h5 className="relative text-lg uppercase">
            B/D Jams <span className="absolute right-0">2023</span>
          </h5>
          <span className="text-[13px] uppercase">It is fun</span>
          <motion.div variants={!isMobile && textVarinat}>
            <p className="mt-[25px] text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quasi!
            </p>
            <Link
              className="block w-fit cursor-pointer pt-[50px] font-semibold underline underline-offset-4"
              onMouseOver={() => setTextHover(true)}
              onMouseOut={() => setTextHover(false)}
              onMouseUp={onMouseClicked}
            >
              <p onMouseDown={(e) => e.preventDefault()}> Visit the Site</p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </li>
  );
};

export default SmoothCard;
