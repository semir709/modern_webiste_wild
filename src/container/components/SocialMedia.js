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
    <ul>
      <li className="mb-2">
        <Link to="https://x.com/?lang=en" target="_blank">
          <div
            style={{
              borderColor: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-fit w-fit rounded-full border p-3"
          >
            <FaTwitter />
          </div>
        </Link>
      </li>
      <li className="mb-2">
        <Link to="https://www.facebook.com/" target="_blank">
          <div
            style={{
              borderColor: !darkMode
                ? colorPalet.light.text
                : colorPalet.dark.text,
            }}
            className="h-fit w-fit rounded-full border p-3"
          >
            <FaFacebookF />
          </div>
        </Link>
      </li>
      {!toggelMore && (
        <li
          className="mb-2 hover:cursor-pointer"
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
            <FaPlus />
          </div>
        </li>
      )}
      {toggelMore && (
        <>
          <li className="mb-2">
            <Link to="https://ba.linkedin.com/" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <FaLinkedinIn />
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="https://www.pinterest.com/" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <FaPinterestP />
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="https://x.com/?lang=en" target="_blank">
              <div
                style={{
                  borderColor: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="h-fit w-fit rounded-full border p-3"
              >
                <MdEmail />
              </div>
            </Link>
          </li>
          <li
            onClick={() => setToggelMore(false)}
            className="mb-2 hover:cursor-pointer"
          >
            <div
              style={{
                borderColor: !darkMode
                  ? colorPalet.light.text
                  : colorPalet.dark.text,
              }}
              className="h-fit w-fit rounded-full border p-3"
            >
              <FaMinus />
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialMedia;
