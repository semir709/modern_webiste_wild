import React, { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";

const ResetScroll = ({ children }) => {
  const { scroll } = useLocomotiveScroll();
  const location = useLocation();

  useEffect(() => {
    scroll &&
      scroll.scrollTo("top", {
        duration: 0,
        disableLerp: true,
      });
  }, [location.pathname, scroll]);

  return <>{children}</>;
};

export default ResetScroll;
