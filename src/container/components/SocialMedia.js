import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const colorPalet = {
  light: { text: "#252422" },
  dark: { text: "#f9cdcd" },
};

const SocialMedia = ({ darkMode = false }) => {
  const [toggelMore, setToggelMore] = useState(false);
  return (
    <ul className="flex flex-wrap sm:block">
      <li className="mb-2 me-2 sm:me-0">
        <Link to="https://x.com/?lang=en" target="_blank">
          <div
            style={{
              borderColor: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-fit w-fit rounded-full border p-3"
          >
            <FaTwitter className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
          </div>
        </Link>
      </li>
      <li className="mb-2 me-2 sm:me-0">
        <Link to="https://www.facebook.com/" target="_blank">
          <div
            style={{
              borderColor: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-fit w-fit rounded-full border p-3"
          >
            <FaFacebookF className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
          </div>
        </Link>
      </li>
      {!toggelMore && (
        <li
          className="mb-2 me-2 hover:cursor-pointer sm:me-0"
          onClick={() => setToggelMore(true)}
        >
          <div
            style={{
              borderColor: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-fit w-fit rounded-full border p-3"
          >
            <FaPlus className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
          </div>
        </li>
      )}
      {toggelMore && (
        <>
          <li className="mb-2 me-2 sm:me-0">
            <Link to="https://ba.linkedin.com/" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <FaLinkedinIn className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
              </div>
            </Link>
          </li>
          <li className="mb-2 me-2 sm:me-0">
            <Link to="https://www.pinterest.com/" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <FaPinterestP className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
              </div>
            </Link>
          </li>
          <li className="mb-2 me-2 sm:me-0">
            <Link to="https://x.com/?lang=en" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <MdEmail className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
              </div>
            </Link>
          </li>
          <li
            onClick={() => setToggelMore(false)}
            className="mb-2 me-2 hover:cursor-pointer sm:me-0"
          >
            <div
              style={{
                borderColor: !darkMode
                  ? colorPalet.light.text
                  : colorPalet.dark.text,
              }}
              className="h-fit w-fit rounded-full border p-3"
            >
              <FaMinus className="h-[10px] w-[10px] sm:h-[18px] sm:w-[18px]" />
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialMedia;
