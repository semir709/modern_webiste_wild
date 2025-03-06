import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";

const ResetScroll = ({ children }) => {
  const { scroll } = useLocomotiveScroll();
  const location = useLocation();
  const previousPath = useRef("/");

  useEffect(() => {
    if (
      location.pathname === "/about" &&
      previousPath.current.startsWith("/about/")
    ) {
      console.log("from new to about");
    } else if (
      location.pathname.startsWith("/about/") &&
      previousPath.current === "/about"
    ) {
      console.log("from about to new");
    } else {
      scroll &&
        scroll.scrollTo("top", {
          duration: 0,
          disableLerp: true,
        });
    }

    previousPath.current = location.pathname;
  }, [location.pathname, scroll]);

  return <>{children}</>;
};

export default ResetScroll;
