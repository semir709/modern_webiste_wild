import "./App.css";
import {
  CareersPage,
  HomePage,
  NewsPage,
  ThinkingPage,
  Contact,
} from "./pages/index";
import { Navigation, ParticlesComponent } from "./container/components/index";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const [textColorNav, setTextColorNav] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

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

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <AnimatePresence>
            <Navigation textColorNav={textColorNav} darkMode={darkMode} />

            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    setTextColorNav={setTextColorNav}
                    setDarkMode={setDarkMode}
                    darkMode={darkMode}
                  />
                }
              />
              <Route
                path="/news"
                element={<NewsPage setTextColorNav={setTextColorNav} />}
              />
              <Route
                path="/careers"
                element={<CareersPage setDarkMode={setDarkMode} />}
              />
              <Route
                path="/thinking"
                element={<ThinkingPage setDarkMode={setDarkMode} />}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
