import { motion } from "framer-motion";

const imageContainerVariant = {
  initial: { translateY: "100%" },
  animate: {
    translateY: "0",
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const imageChildVariant = {
  initial: { translateY: "-100%", scale: 1.25 },
  animate: {
    translateY: "0",
    scale: 1,
    transition: { duration: 1, ease: [0.72, 0, 0.28, 1] },
  },
};

const ImageSmoothHeight = ({ src, alt }) => {
  return (
    <motion.div
      variants={imageContainerVariant}
      initial="initial"
      animate="animate"
      className="w-full overflow-hidden"
    >
      <motion.div
        variants={imageChildVariant}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        <img
          className="h-auto w-full object-cover"
          loading="lazy"
          src={src}
          alt={alt}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageSmoothHeight;
