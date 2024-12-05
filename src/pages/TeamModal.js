import { Modal } from "../container/components";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const TeamModal = () => {
  return (
    <Modal subTextTitle="Laura Tron">
      <div className="overflow-auto px-5 text-customBlack">
        <div className="lg:flex">
          <div className="flex-1">
            <div className="my-2 flex w-full justify-between text-sm">
              <div>
                <span>01</span>
              </div>
              <div>
                <span>/05</span>
              </div>
            </div>
            <div className="w-full">
              <img
                className="h-auto w-full object-cover"
                alt="person"
                src="https://cdn.sanity.io/images/8nn8fua5/production/f0680fd40a1c1e60cf306b79e0ce5228037ff7f7-940x1175.png?w=1280&fm=webp&q=65"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="py-4 text-2xl font-semibold uppercase lg:p-4 lg:text-5xl">
              Laura Tron <br /> /svp, clients
            </h2>
          </div>
        </div>
        <div className="mb-7 mt-5">
          <p className="font-semibold lg:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla molestie nulla vel sollicitudin. Nullam vel quam pulvinar,
            accumsan sem a, fermentum est. In hac habitasse platea dictumst.
            Phasellus ut pulvinar lacus. Proin diam velit, placerat eget nunc
            maximus, molestie sodales arcu. Aenean congue, tortor id ultricies
            feugiat
          </p>
        </div>
      </div>
      <div className="w-full px-5">
        <div className="h-[1px] w-full bg-customBlack"></div>
        <div className="flex py-2">
          <button className="group flex-1 border-r-2 border-customBlack">
            <div className="w-fit overflow-hidden">
              <div className="group-hover:animate-animatioRighttoLeft">
                <GoArrowLeft fontSize={40} />
              </div>
            </div>
          </button>
          <button className="group flex-1">
            <div className="ms-auto w-fit overflow-hidden">
              <div className="group-hover:animate-animatioLefttoRight">
                <GoArrowRight fontSize={40} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TeamModal;
