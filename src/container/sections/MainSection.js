import React, { useState } from "react";
import {
  BgVideo,
  FirstLoadIntroComponent,
  MainVideo,
} from "../components/index";

const MainSection = () => {
  const [changeVideo, setChangeVideo] = useState(false);
  const [bgVideoLoaded, setBgVideoLoaded] = useState(false);

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
          <BgVideo
            setChangeVideo={setChangeVideo}
            setVideoLoaded={setBgVideoLoaded}
          />
        </div>
      </div>
      <FirstLoadIntroComponent videoLoaded={bgVideoLoaded} />
    </main>
  );
};

export default MainSection;
