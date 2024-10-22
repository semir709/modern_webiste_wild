import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, date, image, url, darkMode = false }) => {
  return (
    <Link to={url}>
      <div
        className={`group mb-5 flex h-fit cursor-pointer flex-col border-t-2 py-5 sm:flex-row ${!darkMode ? "border-customBlack" : "border-customPrimary"}`}
      >
        <div className="h-auto w-full overflow-hidden sm:w-1/3">
          <img
            className="h-full w-full scale-110 object-cover transition-transform group-hover:scale-100"
            src={image.url}
            alt={image.alt}
          ></img>
        </div>
        <div
          className={`flex w-full flex-col justify-between uppercase ${!darkMode ? "text-customBlack" : "text-customPrimary"} sm:w-8/12 sm:ps-5`}
        >
          <div className="flex justify-between">
            <h5 className="text-lg font-medium group-hover:underline sm:max-w-[80%] md:text-5xl">
              {title}
            </h5>
            <div className="hidden overflow-hidden sm:block">
              <IoArrowForward
                fontSize={45}
                className="group-hover:animate-animatioLefttoRight"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between text-xs sm:block md:mt-0 md:text-sm">
            <span className="block">
              <strong>press</strong> {date}
            </span>
            <div className="block overflow-hidden sm:hidden">
              <IoArrowForward
                fontSize={25}
                className="group-hover:animate-animatioLefttoRight"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
