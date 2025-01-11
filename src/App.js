import "./App.css";
import {
  CareersPage,
  HomePage,
  NewsPage,
  ThinkingPage,
  Contact,
  WorkPage,
  AboutPage,
  Blog,
} from "./pages/index";
import { ParticlesComponent, ResetScroll } from "./container/components/index";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);
  // const [darkMode, setDarkMode] = useState(false);

  // and set parial compponent to one compoenent that will be on each page where all dark mode goes
  //  witout anyting bing on app.js

  return (
    <>
      {/* <div
        className="fixed left-0 top-0 -z-10 h-full w-full"
        style={{
          background: darkMode ? "#252422" : "white",
          transition: "background 0.3s ease",
        }}
      >
        <ParticlesComponent darkMode={darkMode} />
      </div> */}

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <ResetScroll>
          <main data-scroll-container ref={containerRef}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/thinking/*" element={<ThinkingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about/*" element={<AboutPage />} />
              <Route path="/blog/*" element={<Blog />} />
            </Routes>
          </main>
        </ResetScroll>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
