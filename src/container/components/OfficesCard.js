import React from "react";

const rightLineClass = `pe-2 after:sm:absolute after:sm:right-0 after:sm:top-0 after:sm:h-[95%] after:sm:border-r-[1px] after:sm:border-customBlack after:sm:bg-customBlack after:sm:content-[""]`;
const bottomLineClass = `before:sm:absolute before:sm:bottom-0 before:sm:left-0 before:sm:h-[1px] before:sm:w-full before:sm:bg-customBlack before:sm:content-[""]`;
const bottomLineClassSmall = `before:max-sm:absolute before:max-sm:bottom-0 before:max-sm:left-0 before:max-sm:h-[1px] before:max-sm:w-full before:max-sm:bg-customBlack before:max-sm:content-[""] `;

const OfficesCard = ({
  bottomLine = true,
  rightLine = true,
  location,
  address,
  addressLocation,
  time,
  imgContent,
}) => {
  return (
    <li
      className={`relative mb-5 ${bottomLineClassSmall} ${bottomLine && bottomLineClass} ${rightLine ? rightLineClass : "ps-2"}`}
    >
      <div className="h-[400px] w-full">
        <img
          className="h-full w-full object-cover"
          src={imgContent.url}
          alt={imgContent.alt}
        />
      </div>
      <div className="text-sm uppercase text-customBlack">
        <div className="mt-5 flex w-full items-center justify-between">
          <h5 className="text-2xl font-bold">{location}</h5>
          <div>
            <span>{time}</span>
          </div>
        </div>
        <div className="mb-10 mt-5 text-sm">
          <address className="not-italic leading-4">
            <p>{address}</p>
            <p>{addressLocation}</p>
          </address>
        </div>
      </div>
    </li>
  );
};

export default OfficesCard;
