import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { CarouselSmoothCard } from "../commponents/index";

const MainModule = ({ setToggler }) => {
  const togglerClose = () => {
    setToggler(false);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bg-customBlack w-full h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="absolute top-0 left-0 w-full h-full  py-[25px]   ">
        <div className="h-full flex flex-col justify-between flex-1">
          <div className=" w-full flex items-center justify-between text-customPrimary overflow-hidden md:px-[108px] px-[20px]">
            <div className="flex items-center font-semibold uppercase text-sm">
              <div className="me-[100px] flex items-start leading-4">
                <div>
                  <span>
                    World wild <br /> Nautre Care
                  </span>
                </div>
              </div>
              <div className="leading-4">
                <span>
                  Collaboration of wold wild comapnies for protecting <br />
                  animal and nature
                </span>
              </div>
            </div>
            <div>
              <div
                className="border rounded-full border-white hover:cursor-pointer"
                onClick={togglerClose}
              >
                <VscClose size={40} color="white" />
              </div>
            </div>
          </div>
          <div className=" w-full flex-1 pt-[50px] pb-5 z-50">
            <CarouselSmoothCard />
          </div>
          <div className=" h-[50px] md:px-[110px] px-20px] uppercase text-customGray text-sm font-semibold">
            Deep/Ocean
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MainModule;
