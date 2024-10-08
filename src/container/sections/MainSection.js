import React, { useEffect, useRef, useState } from "react";
import { mainVideo, sideVideo } from "../../assets/videos";
import { motion } from "framer-motion";
import { BgVideo, MainVideo } from "../components/index";

const MainSection = () => {
  const [changeVideo, setChangeVideo] = useState(false);

  return (
    <main>
      <div className="relative h-screen w-full overflow-hidden">
        <div className={`${changeVideo ? "block" : "hidden"}`}>
          <MainVideo
            changeVideo={changeVideo}
            setChangeVideo={setChangeVideo}
          />
        </div>

        <div className={`${changeVideo ? "hidden" : "block"}`}>
          <BgVideo setChangeVideo={setChangeVideo} />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
