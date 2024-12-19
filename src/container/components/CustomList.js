import React from "react";
import CustomDot from "./CustomDot";
import { Link } from "react-router-dom";

const CustomList = ({ list, title, color = "bg-customBlack" }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center text-lg font-medium uppercase lg:text-2xl">
        <CustomDot color={color} />
        <h6>{title}</h6>
      </div>
      <ul className="mt-5">
        {list.map(({ text, url }) => (
          <li className="cursor-pointer text-sm underline-offset-4 hover:underline lg:text-lg">
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomList;
