import { SmoothCard } from "../commponents/index";
import { motion } from "framer-motion";

const CarouselSmoothCard = () => {
  return (
    <div>
      <motion.ol
        className="h-full flex "
        drag="x"
        dragConstraints={{ right: 110 }}
      >
        {[1, 2, 3, 4, 5].map(() => (
          <SmoothCard />
        ))}
      </motion.ol>
    </div>
  );
};

export default CarouselSmoothCard;
