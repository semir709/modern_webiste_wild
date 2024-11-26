import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const listTextData = [
  { id: 1, text: "Webby awards" },
  { id: 2, text: "asweek" },
  { id: 3, text: "awwwards" },
  { id: 4, text: "Webby awards" },
  { id: 5, text: "asweek" },
  { id: 6, text: "awwwards" },
];
const listImageData = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/29127727/pexels-photo-29127727/free-photo-of-adorable-shih-tzu-puppy-playing-with-toy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29127727/pexels-photo-29127727/free-photo-of-adorable-shih-tzu-puppy-playing-with-toy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/28988215/pexels-photo-28988215/free-photo-of-surfer-at-sunset-on-ipanema-beach-rio-de-janeiro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/28830603/pexels-photo-28830603/free-photo-of-elegant-sunlit-arcaded-corridor-with-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/28830104/pexels-photo-28830104/free-photo-of-scenic-pathway-leading-to-arch-bridge-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/29219897/pexels-photo-29219897/free-photo-of-gothic-archway-and-wooden-bench-in-ruins.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "test",
  },
];

const ListImageText = () => {
  const [globlaIndex, setGlobalIndex] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const holderContainerRef = useRef(null);
  const imgHolder = useRef(null);
  const navigate = useNavigate();

  const onMouseMoving = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const targetContainer = holderContainerRef.current;

    setPosition({
      x: mouseX - targetContainer.getBoundingClientRect().left,
      y: mouseY - targetContainer.getBoundingClientRect().top,
    });
  };

  return (
    <>
      <div
        onMouseMove={onMouseMoving}
        ref={holderContainerRef}
        className="relative"
      >
        <ul className="font-bold uppercase sm:text-2xl lg:text-8xl">
          {listTextData.map(({ text, id }) => (
            <li
              onClick={() => navigate("awards")}
              onMouseOver={() => setGlobalIndex(id)}
              onMouseOut={() => setGlobalIndex(null)}
              className="my-8 w-fit cursor-pointer"
            >
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <ul
          style={{ position: "absolute", top: position.y, left: position.x }}
          ref={imgHolder}
          className="pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          {listImageData.map(({ url, alt, id }) => (
            <li className={`${id === globlaIndex ? "block" : "hidden"}`}>
              <div className="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px]">
                <img
                  className="h-full w-full object-cover"
                  src={url}
                  alt={alt}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 right-0 hidden sm:block">
          <span className="text-sm font-semibold uppercase md:text-base">
            Setting standards others follow
            <div className="ms-2 inline-block h-[15px] w-[15px] rounded-full bg-customPrimary"></div>
          </span>
        </div>
      </div>
    </>
  );
};

export default ListImageText;
