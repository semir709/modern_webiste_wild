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
import { ParticlesComponent } from "./container/components/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const containerRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  useLayoutEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    scroll.scrollTo("top", {
      offset: 0,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className="fixed left-0 top-0 -z-10 h-full w-full"
        style={{
          background: darkMode ? "#252422" : "white",
          transition: "background 0.3s ease",
        }}
      >
        <ParticlesComponent darkMode={darkMode} />
      </div>

      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      > */}
      <main data-scroll-container ref={containerRef}>
        <Routes>
          <Route
            path="/"
            element={<HomePage setDarkMode={setDarkMode} darkMode={darkMode} />}
          />
          <Route path="/news" element={<NewsPage darkMode={darkMode} />} />
          <Route
            path="/careers"
            element={
              <CareersPage setDarkMode={setDarkMode} darkMode={darkMode} />
            }
          />
          <Route
            path="/thinking/*"
            element={
              <ThinkingPage setDarkMode={setDarkMode} darkMode={darkMode} />
            }
          />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/work" element={<WorkPage darkMode={darkMode} />} />

          <Route
            path="/about/*"
            element={
              <AboutPage setDarkMode={setDarkMode} darkMode={darkMode} />
            }
          />
          <Route
            path="/blog/*"
            element={<Blog setDarkMode={setDarkMode} darkMode={darkMode} />}
          />
        </Routes>
      </main>
      {/* </LocomotiveScrollProvider> */}
    </>
  );
}

export default App;
