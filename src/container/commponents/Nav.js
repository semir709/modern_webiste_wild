import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="h-full w-full">
        <ul className="block justify-around lg:flex">
          <li className="bottomLineAnimation">
            <span>Explore</span>
          </li>
          <li className="bottomLineAnimation">
            <span>About</span>
          </li>
          <li className="bottomLineAnimation">
            <span>News</span>
          </li>
          <li className="bottomLineAnimation">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
      {/* <nav>
        <ul className="my-[70px] text-lg font-semibold uppercase text-customPrimary sm:text-3xl">
          <li className="mb-4 cursor-pointer">
            <span>Explore</span>
          </li>
          <li className="mb-4 cursor-pointer">
            <span>About</span>
          </li>
          <li className="mb-4 cursor-pointer">
            <span>News</span>
          </li>
          <li className="mb-4 cursor-pointer">
            <span>Contact</span>
          </li>
          <li
            onClick={() => setShowIniatives(true)}
            className="mb-4 cursor-pointer"
          >
            Initiatives <span>&gt;</span>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Nav;
