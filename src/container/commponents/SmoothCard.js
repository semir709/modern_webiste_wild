import { motion } from "framer-motion";
import { useNavigate, Link } from 'react-router-dom'

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
      y: { bounce: 0 },
    },
  },
};



const SmoothCard = ({ setTextHover, url }) => {
  const navigate = useNavigate()

  const onMouseClicked = (e) => {
    navigate(url)
  }
  return (
    <li className=" w-[27%] flex-shrink-0 h-full  relative list-counter-class ">
      <motion.div
        className="h-full flex flex-col px-2 horizontalLine numberCounter "
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div variants={imageVarinat} className=" pointer-events-none">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/4256377/pexels-photo-4256377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="girl"
          />
        </motion.div>
        <motion.div className=" h-1/2  bg px-3 pt-3 font-semibold ">
          <h5 className="relative text-lg uppercase ">
            B/D Jams <span className="absolute right-0">2023</span>
          </h5>
          <span className="uppercase text-[13px] ">It is fun</span>
          <motion.div variants={textVarinat}>
            <p className=" mt-[25px] text-[13px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quasi!
            </p>
            <Link
              className="font-semibold underline underline-offset-4 cursor-pointer pt-[50px] block w-fit "
              onMouseOver={() => setTextHover(true)}
              onMouseOut={() => setTextHover(false)}
              onMouseUp={onMouseClicked}
            >
             
              <p  onMouseDown={(e) => e.preventDefault()}> Visit the Site</p>
            </Link>

            
          </motion.div>
        </motion.div>
      </motion.div>
    </li>
  );
};

export default SmoothCard;
