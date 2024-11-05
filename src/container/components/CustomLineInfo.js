import React from "react";

const CustomLineInfo = ({ darkMode = false, text, subText }) => {
  return (
    <>
      <div
        // style={{
        //   background: !darkMode ? "bg-customBlack" : "bg-customPrimary",
        // }}
        className={`h-[1px] w-full ${!darkMode ? "bg-customBlack" : "bg-customPrimary"}`}
      ></div>
      <div
        className={`uppercase ${!darkMode ? "text-customBlack" : "text-customPrimary"} mt-4 items-center justify-between text-sm md:flex`}
      >
        <div className="leading-3 md:w-[40%]">{text}</div>
        <div className="flex items-center justify-between md:w-[60%]">
          <span className="leading-3 md:text-base">{subText}</span>
          <span className="leading-3 md:text-2xl">●</span>
        </div>
      </div>
    </>
  );
};

export default CustomLineInfo;
