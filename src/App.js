import "./App.css";
import { HomePage } from "./pages";
import { Navigation, ParticlesComponent } from "./container/commponents/index";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full">
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
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
