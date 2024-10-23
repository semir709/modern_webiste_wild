import "./App.css";
import { HomePage } from "./pages";
import {
  Footer,
  Navigation,
  ParticlesComponent,
} from "./container/components/index";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);
  const [textColorNav, setTextColorNav] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <ParticlesComponent />
      </div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
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
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
