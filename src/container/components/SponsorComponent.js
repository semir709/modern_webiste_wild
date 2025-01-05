import { useState } from "react";
import CustomDragMouse from "./CustomDragMouse";
import { eng_data } from "../../data/engagements_data";
import HorizontalScroll from "./HorizontalScroll";

const SponsorComponent = ({ darkMode }) => {
  const [isHovered, setIsHoverd] = useState(false);

  return (
    <>
      <CustomDragMouse Isfocused={isHovered}>
        <HorizontalScroll
          data={eng_data}
          darkMode={darkMode}
          setIsHoverd={setIsHoverd}
        />
      </CustomDragMouse>
    </>
  );
};

export default SponsorComponent;
