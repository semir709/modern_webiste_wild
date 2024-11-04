import { motion } from "framer-motion";

const parentTextVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childrenTextVariant = {
  initial: { translateY: "100%" },
  animate: {
    translateY: 0,
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const CustomTextOverflow = ({ text }) => {
  return (
    <div className="overflow-hidden">
      <motion.span className="block" variants={childrenTextVariant}>
        {text}
      </motion.span>
    </div>
  );
};

const TextFromBottomOverflow = ({ text }) => {
  return (
    <motion.span
      variants={parentTextVariant}
      initial="initial"
      animate="animate"
    >
      {text.map(({ text, id }, index) => (
        <CustomTextOverflow key={id} text={text} />
      ))}
    </motion.span>
  );
};

export default TextFromBottomOverflow;
