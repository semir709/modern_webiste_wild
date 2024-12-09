import { useNavigate, useParams } from "react-router-dom";
import { Modal, TextFromBottomOverflow } from "../container/components";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { peoples_data } from "../data/peoples_data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

const TeamModal = () => {
  const { person } = useParams();

  const [data, setData] = useState(peoples_data);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const indexEl = data.map((el) => el.slug).indexOf(person);
    setIndex(indexEl);
  }, [data, person]);

  const titleArray = [
    { id: nanoid(), text: data[index].name },
    { id: nanoid(), text: "/" + data[index].role },
  ];

  return (
    <Modal subTextTitle="Laura Tron">
      <div className="overflow-auto px-5 text-customBlack">
        <div className="lg:flex">
          <div className="flex-1">
            <div className="my-2 flex w-full justify-between text-sm">
              <div>
                <span>
                  {(index + 1).toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
              </div>
              <div>
                <span>
                  /
                  {data.length.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <div className="w-full">
              <img
                className="h-auto w-full object-cover"
                alt={data[index].image.mainImage.alt}
                src={data[index].image.mainImage.url}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2
              initial={{}}
              animate={{}}
              className="py-4 text-2xl font-semibold uppercase lg:p-4 lg:text-5xl"
            >
              {/* {data[index].name}
              <br /> /{data[index].role} */}
              <TextFromBottomOverflow text={titleArray} />
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
          <button
            onClick={() =>
              navigate(
                `/about/team/${data[index - 1 < 0 ? data.length - 1 : index - 1].slug}`,
              )
            }
            className="group flex-1 border-r-2 border-customBlack"
          >
            <div className="w-fit overflow-hidden">
              <div className="group-hover:animate-animatioRighttoLeft">
                <GoArrowLeft fontSize={40} />
              </div>
            </div>
          </button>
          <button
            onClick={() =>
              navigate(
                `/about/team/${data[index + 1 > data.length - 1 ? 0 : index + 1].slug}`,
              )
            }
            className="group flex-1"
          >
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
