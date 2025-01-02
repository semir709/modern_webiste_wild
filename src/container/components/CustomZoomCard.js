import React from "react";
import { Link } from "react-router-dom";

const colorPalet = {
  light: { text: "#252422", bg: "#ffffff" },
  dark: { text: "#f9cdcd", bg: "#252422" },
};

const CustomZoomCard = ({ data, darkMode = false }) => {
  return (
    <div className="w-full overflow-auto pb-5 ps-3 sm:ps-0">
      <ul className="flex w-full gap-2">
        {data.map(({ type, src, title, text, id }) => (
          <li key={id} className={`group min-w-[250px] md:min-w-0 md:flex-1`}>
            <Link>
              <div className="h-auto overflow-hidden">
                <div className="h-[500px] scale-105 transition-transform duration-300 group-hover:scale-100">
                  {type === "img" && (
                    <picture className="h-full">
                      <img
                        src={src.img}
                        alt={src.alt}
                        className="h-full object-cover"
                      />
                    </picture>
                  )}
                  {type === "video" && (
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      loop
                      src={src.video}
                    >
                      video
                    </video>
                  )}
                </div>
              </div>
              <div
                style={{
                  color: !darkMode
                    ? colorPalet.light.text
                    : colorPalet.dark.text,
                }}
                className="mt-5 uppercase"
              >
                <h5 className="text-lg font-bold underline-offset-4 group-hover:underline sm:text-2xl">
                  {title}
                </h5>
                <p className="mt-4 w-2/3 text-xs font-medium leading-5 sm:text-sm">
                  {text}
                </p>
              </div>
            </Link>
          </li>
        ))}
        <li className="ps-1 sm:hidden"></li>
      </ul>
    </div>
  );
};

export default CustomZoomCard;
