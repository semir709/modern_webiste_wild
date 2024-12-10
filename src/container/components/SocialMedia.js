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

const SocialMedia = () => {
  const [toggelMore, setToggelMore] = useState(false);
  return (
    <ul>
      <li className="mb-2">
        <Link to="https://x.com/?lang=en" target="_blank">
          <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
            <FaTwitter />
          </div>
        </Link>
      </li>
      <li className="mb-2">
        <Link to="https://www.facebook.com/" target="_blank">
          <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
            <FaFacebookF />
          </div>
        </Link>
      </li>
      {!toggelMore && (
        <li
          className="mb-2 hover:cursor-pointer"
          onClick={() => setToggelMore(true)}
        >
          <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
            <FaPlus />
          </div>
        </li>
      )}
      {toggelMore && (
        <>
          <li className="mb-2">
            <Link to="https://ba.linkedin.com/" target="_blank">
              <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
                <FaLinkedinIn />
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="https://www.pinterest.com/" target="_blank">
              <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
                <FaPinterestP />
              </div>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="https://x.com/?lang=en" target="_blank">
              <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
                <MdEmail />
              </div>
            </Link>
          </li>
          <li
            onClick={() => setToggelMore(false)}
            className="mb-2 hover:cursor-pointer"
          >
            <div className="h-fit w-fit rounded-full border border-customPrimary p-3">
              <FaMinus />
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialMedia;
