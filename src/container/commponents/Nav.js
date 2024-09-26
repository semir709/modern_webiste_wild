import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="h-full w-full">
        <ul className="block justify-around text-lg font-semibold uppercase lg:flex lg:text-base lg:font-normal lg:capitalize">
          <li className="bottomLineAnimation mb-4 lg:mb-0">
            <span>Explore</span>
          </li>
          <li className="bottomLineAnimation mb-4 lg:mb-0">
            <span>About</span>
          </li>
          <li className="bottomLineAnimation mb-4 lg:mb-0">
            <span>News</span>
          </li>
          <li className="bottomLineAnimation mb-4 lg:mb-0">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
