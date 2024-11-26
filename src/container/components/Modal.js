import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [position, setPosition] = useState(0);
  const { scroll } = useLocomotiveScroll();
  const navigate = useNavigate();

  useEffect(() => {
    if (scroll) {
      const currentPosition = scroll.scroll.instance.scroll.y;
      setPosition(currentPosition);
      scroll.stop();
    }

    return () => {
      if (scroll) scroll.start();
    };
  }, [scroll]);
  return (
    <div
      style={{ top: position }}
      className="fixed z-50 flex h-screen w-full justify-end bg-black opacity-40"
    >
      <div className="bg-red-300 p-5">hello</div>
    </div>
  );
};

export default Modal;
