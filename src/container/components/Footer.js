import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import CustomDot from "./CustomDot";
import CustomList from "./CustomList";

const socialsList = [
  { text: "Instagram", url: "/instagram" },
  { text: "Twitter", url: "/twitter" },
  { text: "Linkedln", url: "/linkedln" },
  { text: "Facebook", url: "/facebook" },
];

const initiativesList = [
  { text: "Crafted", url: "/crafted" },
  { text: "Applied", url: "/applied" },
  { text: "Brandbeats", url: "/brandbeats" },
  { text: "Moves", url: "/moves" },
];

const officesList = [
  { text: "San Diego - CA", url: "/san_diego" },
  { text: "New York - NY", url: "/new_york" },
  { text: "London - EN", url: "/london" },
  { text: "Berlin - GE", url: "/berlin" },
];

const Footer = () => {
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    console.log(inputFocused);
  }, [inputFocused]);
  return (
    <footer data-scroll-section className="bg-customBlack">
      <div className="px-[5%] py-40">
        <div className="text-customWhite">
          <div className="mb-20 flex w-full flex-col justify-between gap-20 lg:flex-row">
            <div className="flex-1">
              <span className="text-4xl font-bold uppercase">B/W</span>
            </div>
            <div className="flex-1">
              <p className="mt-5 text-2xl font-semibold leading-7 lg:mt-0 lg:max-w-md">
                We collaborate with ambitious brands and people. Let's build.
                <br />
                <Link className="underline underline-offset-4" to={"/"}>
                  wild@nature.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-20 lg:flex-row">
            <div className="flex-1">
              <div className="mb-2 flex items-center font-medium uppercase">
                <CustomDot />
                <h6>Stay in the known</h6>
              </div>
              <form>
                <div className="">
                  <div className="flex items-center justify-between">
                    <input
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      className="w-full bg-transparent outline-none"
                      placeholder="Email address"
                    />
                    <button>
                      <IoArrowForward fontSize={25} />
                    </button>
                  </div>
                  <div
                    className={`mt-3 w-full bg-customWhite ${inputFocused ? "h-[2px]" : "h-[1px]"}`}
                  ></div>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <div className="flex flex-col justify-between lg:flex-row">
                <CustomList list={socialsList} title={"socials"} />
                <CustomList list={initiativesList} title={"Initiatives"} />
                <CustomList list={officesList} title={"Offices"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between bg-[#191918] px-[5%] py-5 lg:flex-row">
        <div className="text-xs font-medium uppercase text-customGray">
          <span>Beautiful/wild</span>
        </div>
        <div className="text-xs font-medium uppercase text-customGray">
          <span>Easy to understand, impossible to ignore.™</span>
        </div>
        <div className="text-xs font-medium uppercase text-customGray">
          <span>Terms, Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
