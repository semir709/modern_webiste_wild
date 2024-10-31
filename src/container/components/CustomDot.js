import React from "react";

const CustomDot = ({ color = "bg-white" }) => {
  return <div className={`me-2 h-[10px] w-[10px] rounded-full ${color}`}></div>;
};

export default CustomDot;
