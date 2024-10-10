import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const easing = [0.28, 0, 0, 1];

const imageVariant = {
  rest: {
    height: "75%",
  },
  hover: {
    height: "55%",
    transition: {
      duration: 0.5,
      ease: easing,
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
      ease: easing,
    },
  },
};

const SmoothCardImage = ({ imgContent }) => (
  <img
    className="h-full w-full object-cover"
    src={imgContent.url}
    alt={imgContent.alt}
  />
);

const TextBlock = ({
  urlRedirect,
  text,
  urlText,
  whenMouseHover = () => {},
  whenMouseOut = () => {},
}) => {
  return (
    <>
      <p>{text}</p>

      {urlRedirect && (
        <Link
          onMouseOver={whenMouseHover}
          onMouseOut={whenMouseOut}
          to={urlRedirect}
          className="mt-5 block font-bold underline"
        >
          <span>{urlText}</span>
        </Link>
      )}
    </>
  );
};

const SmoothCard = ({
  title,
  subtext,
  rightText = "",
  imgContent,
  urlRedirect,
  number = 0,
  text,
  urlText,
  whenMouseHover = () => {},
  whenMouseOut = () => {},
}) => {
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
        <SmoothCardImage imgContent={imgContent} />
      </motion.div>
      <div className="pointer-events-none block pt-8 lg:hidden">
        <SmoothCardImage imgContent={imgContent} />
      </div>
      <div className="text-sm font-medium lg:ms-2">
        <div className="uppercase">
          <h5 className="relative flex items-center justify-between text-lg font-bold">
            {title}
            <span className="block">{rightText}</span>
          </h5>
          <span>{subtext}</span>
        </div>
        <motion.div variants={textVariant} className="mt-4 hidden lg:block">
          <TextBlock
            urlRedirect={urlRedirect}
            text={text}
            urlText={urlText}
            whenMouseHover={whenMouseHover}
            whenMouseOut={whenMouseOut}
          />
        </motion.div>
        <div className="mt-4 block lg:hidden">
          <TextBlock urlRedirect={urlRedirect} text={text} urlText={urlText} />
        </div>
      </div>
    </motion.li>
  );
};

export default SmoothCard;
