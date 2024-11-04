import React from "react";

const OfficesCard = ({
  bottomLine = true,
  rightLine = true,
  location,
  address,
  time,
}) => {
  return (
    <li
      className={`relative mb-5 px-2 ${bottomLine && 'before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-customBlack before:content-[""]'} ${rightLine && 'after:absolute after:right-0 after:top-0 after:h-[95%] after:border-r-[1px] after:border-customBlack after:bg-customBlack after:content-[""]'}`}
    >
      <div className="w-full">
        <img
          className="h-auto w-full object-cover"
          src="https://cdn.sanity.io/images/8nn8fua5/production/42cce222e196d8343dcbc2dcb588763e9811138f-720x885.jpg?w=1024&fm=webp&q=65"
          alt="test"
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
          <address className="not-italic leading-4">{address}</address>
        </div>
      </div>
    </li>
  );
};

export default OfficesCard;
